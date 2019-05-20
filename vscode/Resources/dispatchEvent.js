;(function (window, HardwareKeyboard) {
  HardwareKeyboard = window.HardwareKeyboard || (window.HardwareKeyboard = {});
  var slice = [].slice;
  var ATTRIBUTE_NAME = 'hardkeyboard';

  HardwareKeyboard.id = 1;
  

  HardwareKeyboard.getKeyCode = function (code) {
    const key = this.keyCodes.map[code];
  
    return { ...key };
  }

  HardwareKeyboard.clearTasks = function () {
    var task;

    while(task = this.tasks.pop()) {
      this.dispatchEvent(task);
    }
  }

  HardwareKeyboard.updateModifierState = function (key, bool) {
    switch (key) {
      case 'Meta':
        HardwareKeyboard.isMetaKey = bool;
        break;

      case 'Alt':
        HardwareKeyboard.isAltKey = bool;
        break;

      case 'Shift':
        HardwareKeyboard.isShiftKey = bool;
        break;

      case 'Control':
        HardwareKeyboard.isCtrlKey = bool;
        break;
    }
  }

  HardwareKeyboard.updateEvent = function (event) {
    event.metaKey = HardwareKeyboard.isMetaKey;
    event.altKey = HardwareKeyboard.isAltKey;
    event.ctrlKey = HardwareKeyboard.isCtrlKey;
    event.shiftKey = HardwareKeyboard.isShiftKey;

    if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
      event.isModifierEvent = true;
    }
  }

  HardwareKeyboard.createEvent = function (type, key) {
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

  HardwareKeyboard.getKey = function (keyCode) {
    var key = this.getKeyCode(keyCode);

    if (key) {
      if (key.code === 'Backquote') {
        const esc = this.getKeyCode(41);
  
        if (HardwareKeyboard.isMetaKey) {
          return esc;
        }
      }
  
      return key;
    }
  }

  HardwareKeyboard.currentActiveElement = null;

  HardwareKeyboard.onBlur = (function () {
    document.activeElement.removeEventListener('input', this.onInput, false);
    document.activeElement.removeEventListener('keydown', this.onKeyDown, false);
    document.activeElement.removeEventListener('keyup', this.onKeyUp, false);
  }).bind(HardwareKeyboard);

  HardwareKeyboard.onKeyDown = (function () {

  }).bind(HardwareKeyboard);

  HardwareKeyboard.onKeyUp = (function () {

  }).bind(HardwareKeyboard);

  HardwareKeyboard.onInput = (function () {

  }).bind(HardwareKeyboard);

  HardwareKeyboard.dispatchEvent = function (type, keyCode) {
    var key = this.getKey(keyCode);
    var event = this.createEvent(type || 'keydown', key);

    if (key) {
      if (type === 'keydown') {
        if (key.isModifierKey) {
          this.updateModifierState(key.key, true);
        } else {
          this.updateEvent(event);
        }
      } else {
        if (key.isModifierKey) {
          this.updateModifierState(key.key, false);
        } else {
          this.updateEvent(event);
        }
      }

      if (document.activeElement) {
        if (!document.activeElement.hasAttribute(ATTRIBUTE_NAME)) {
          document.activeElement.setAttribute(ATTRIBUTE_NAME, HardwareKeyboard.id++)
          document.activeElement.addEventListener('blur', this.onBlur, false);
          document.activeElement.addEventListener('input', this.onInput, false);
          document.activeElement.addEventListener('keydown', this.onKeyDown, false);
          document.activeElement.addEventListener('keyup', this.onKeyUp, false);
        }

        event.id = new Date() - 0;

        if (key.isSupportKey) {
          if (event.isModifierEvent) {
            var evt = new KeyboardEvent(event.type, { ... event })
            document.activeElement.dispatchEvent(evt);      
          }
        } else {
          var evt = new KeyboardEvent(event.type, { ... event })
          document.activeElement.dispatchEvent(evt);
  
            if (key.isTabKey) {
                document.dispatchEvent(evt);
                window.dispatchEvent(evt);
            }
        }
  
        console.log(key);
      }
    }
  }

  HardwareKeyboard.createDocumentProxier = function () {
    var doc = new Proxy(window.document, {
      set: function () {
        debugger;
      }
    });

    window.document = doc;
  }

  HandwareKeyboard.createDocumentProxier();

  window.HardwareKeyboard = HardwareKeyboard;
})(window, window.HardwareKeyboard);
