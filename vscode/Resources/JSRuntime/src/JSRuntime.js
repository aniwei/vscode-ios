
import keyCodesMap from './keyCodeMap';
import { modifierKeys, assign } from './shared';

const ATTRIBUTE_NAME = 'jsRuntimeProperty';
const slice = [].slice;

class JSRumtime {
  constructor () {
    this.modifierKeysState = {
      metaKey: false,
      altKey: false,
      ctrlKey: false,
      shiftKey: false
    };

    this.id = 1;

    this.isListenedEditor = false;
    

    this.whenJavaScripBridgeReady(this.onJavaScripBridgeReady);
    this.fixCopyExecCommand();
  }

  whenJavaScripBridgeReady (callback) {
    if (window.WebViewJavascriptBridge) {
      return document.dispatchEvent(new Event('WebViewJSBridgeReady'));
    }

    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback);
    }

    window.WVJBCallbacks = [callback];
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = 'https://__bridge_loaded__';
    document.documentElement.appendChild(iframe);
    setTimeout(function() { 
      document.documentElement.removeChild(iframe) 
    }, 0);
  }

  fixCopyExecCommand () {
    const execCommand = document.execCommand;
    const commands = {
      COPY: 'copy'
    }

    // only support string data
    document.execCommand = function (...argv) {
      const type = argv[0];

      // safari can not tirgger copy event
      if (type === commands.COPY) {
        const event = new ClipboardEvent(type);
        document.activeElement.dispatchEvent(event);
      } else {
        execCommand.apply(this, argv);
      }
    } 
  }

  // for copy event.
  createWindowClipboard () {
    Object.defineProperty(window, 'clipboardData', {
      get () {
        return clipboardData;
      }
    });

    const clipboardData = {
      setData: (mime, text) => {
        return navigator.clipboard.writeText(text);
      },

      getData: (mime) => {
        return navigator.clipboard.readText(text);
      }
    }
  }

  createNavigatorClipboard (bridge) {
    navigator.clipboard = {
      readText: () => {
        return new Promise((resolve, reject) => {
          bridge.callHandler('navigator.clipboard.readText', (data) => {
            resolve(data);
          });
        })
      },

      writeText: function (text) {
        return new Promise((resolve, reject) => {
          bridge.callHandler('navigator.clipboard.writeText', { content: text }, (data, callback) => {
            resolve();
          });
        })
      }
    }

    navigator.permissions = {
      query: () => {
        return new Promise((resolve, reject) => {
          const exports = {
            onchange () {},
            state: 'granted'
          };
          resolve(exports);

          exports.onchange();
        })
      }
    }
  }

  onJavaScripBridgeReady = (bridge) => {
    this.bridge = bridge;

    this.createNavigatorClipboard(this.bridge);
    this.createWindowClipboard(this.bridge);
  }

  onActiveElementBlur = () => {
    const activeElement = this.activeElement;

    if (activeElement) {
      activeElement.removeAttribute(ATTRIBUTE_NAME);
      activeElement.removeEventListener('input', this.onActiveElementInput, false);
      activeElement.removeEventListener('keydown', this.onActiveElementKeyDown, false);
      activeElement.removeEventListener('keyup', this.onActiveElementKeyUp, false);
    }

    this.activeElement = null;
  }

  onActiveElementInput = (e) => {
    console.log('input ===> ', e)
  }

  onActiveElementKeyDown = () => {

  }

  onActiveElementKeyUp = () => {

  }

  getKey (code) {
    const key = this.getKeyCode(code);

    if (key) {
      if (key.code === 'Backquote') {
        const esc = this.getKeyCode(41);
  
        if (this.modifierKeysState.metaKey) {
          return esc;
        }
      }
  
      return key;
    }
  }

  getKeyCode (code) {
    return { ...keyCodesMap[code] };
  }

  updateModifierKeyState (key, bool) {
    if (modifierKeys.includes(key)) {
      key = key === 'Control' ? 'ctrl' : key;

      this.modifierKeysState[`${key.toLowerCase()}Key`] = bool;
    }
  }

  updateEvent (event) {
    assign(event, this.modifierKeysState);

    if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
      event.isModifierEvent = true;
    }

    return event;
  }

  createEvent (type, key) {
    return {
      type: type || 'keydown',
      ...key,
      bubbles: true,
      cancelBubble: false,
      composed: true,
      eventPhase: 0,
      isTrusted: true,
      isComposing: false
    }
  }

  createEditorLisener () {
    this.fixEditorMouseEvent();
  }

  fixEditorMouseEvent () {
    const editor = document.querySelector('.editor');
    const dispatchEvent = (type, e) => {
      const { changedTouches } = e;
      const touch = changedTouches[0];
      const { 
        clientX, 
        clientY, 
        layerX, 
        layerY, 
        metaKey, 
        altKey, 
        shiftKey, 
        ctrlKey,
        offsetX,
        offsetY,
        pageX,
        pageY,
        screenX,
        screenY,
      } = touch;

      const event = {
        clientX, 
        clientY, 
        layerX, 
        layerY, 
        metaKey, 
        altKey, 
        shiftKey, 
        ctrlKey,
        offsetX,
        offsetY,
        pageX,
        pageY,
        screenX,
        screenY,
        x: pageX,
        y: pageY,
        bubbles: true,
        isTrusted: true
      };

      const editor = e.target;

      if (editor) {
        editor.dispatchEvent(new MouseEvent(type, this.updateEvent(event)));
      }
    }

    editor.addEventListener('touchstart', (e) => {
      if (this.modifierKeysState.shiftKey) {
        dispatchEvent('mousedown', e);
      }
    }, false);

    editor.addEventListener('touchmove', (e) => {
      if (this.modifierKeysState.shiftKey) {
        dispatchEvent('mousemove', e);
      }
    });

    editor.addEventListener('touchend', function (e) {
      if (this.modifierKeysState.shiftKey) {
        dispatchEvent('mouseup', e);
      }
    });
  }
  
  onlyShiftKey (event) {
    return event.shiftKey && (
      !event.metaKey &&
      !event.altKey &&
      !event.ctrlKey
    )
  }

  dispatchEvent (type, keyCode) {
    const key = this.getKey(keyCode);
    const event = this.createEvent(type || 'keydown', key);

    if (key) {
      if (!this.isListenedEditor) {
        this.isListenedEditor = true;

        this.createEditorLisener();
      }


      if (type === 'keydown') {
        if (key.isModifierKey) {
          this.updateModifierKeyState(key.key, true);
        } else {
          this.updateEvent(event);
        }
      } else {
        if (key.isModifierKey) {
          this.updateModifierKeyState(key.key, false);
        } else {
          this.updateEvent(event);
        }
      }

      const activeElement = document.activeElement;

      if (activeElement) {
        if (!activeElement.hasAttribute(ATTRIBUTE_NAME)) {
          this.activeElement = activeElement;

          activeElement.setAttribute(ATTRIBUTE_NAME, `jsRuntime-${this.id++}`);
          activeElement.addEventListener('blur', this.onActiveElementBlur, false);
          activeElement.addEventListener('input', this.onActiveElementInput, false);
          activeElement.addEventListener('keydown', this.onActiveElementKeyDown, false);
          activeElement.addEventListener('keyup', this.onActiveElementKeyUp, false);
        }

        event.id = new Date() - 0;

        if (key.isSupportKey) {
          if (event.isModifierEvent) {
            if (!this.onlyShiftKey(event)) {
              var evt = new KeyboardEvent(event.type, { ... event })
              activeElement.dispatchEvent(evt);      
            }
          }
        } else {
          var evt = new KeyboardEvent(event.type, { ... event })
          activeElement.dispatchEvent(evt);
  
            if (key.isTabKey) {
              document.dispatchEvent(evt);
              window.dispatchEvent(evt);
            }
        }
  
        console.log(key);
      }
    }
  }
}

export default new JSRumtime();