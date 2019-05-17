;(function (window, HardwareKeyboard) {
  HardwareKeyboard = window.HardwareKeyboard || (window.HardwareKeyboard = {});
  var slice = [].slice;

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

  HardwareKeyboard.query = function (sel) {
    return document.querySelector(sel);
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

  window.HardwareKeyboard = HardwareKeyboard;
})(window, window.HardwareKeyboard);
