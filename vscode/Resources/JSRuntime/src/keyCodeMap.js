function createArrowKeys (map = {}) {
  const arrows = [
    { key: 'ArrowRight', keyCode: 39 },
    { key: 'ArrowLeft', keyCode: 37 },
    { key: 'ArrowDown', keyCode: 40 },
    { key: 'ArrowRight', keyCode: 38 }
  ];

  arrows.forEach((arrow, i) => {
    map[79 + i] = {
      code: arrow.key,
      key: arrow.key,
      keyCode: arrow.keyCode
    }
  });

  return map;
}

function createModifierKeys () {
  return {
    '231': {
      code: 'MetaRight',
      key: 'Meta',
      metaKey: true,
      keyCode: 93,
      location: 2,
      isModifierKey: true
    },

    '227': {
      code: 'MetaLeft',
      key: 'Meta',
      metaKey: true,
      keyCode: 91,
      location: 1,
      isModifierKey: true
    },

    '226': {
      code: 'AltLeft',
      key: 'Alt',
      altKey: true,
      keyCode: 18,
      location: 1,
      isModifierKey: true
    },


    '230': {
      code: 'AltRight',
      key: 'Alt',
      altKey: true,
      keyCode: 18,
      location: 2,
      isModifierKey: true
    },

    '224': {
      code: 'ControlLeft',
      key: 'Control',
      ctrlKey: true,
      keyCode: 17,
      location: 1,
      isModifierKey: true
    },

    '228': {
      code: 'ControlRight',
      key: 'Control',
      ctrlKey: true,
      keyCode: 17,
      location: 2,
      isModifierKey: true
    },

    '225': {
      code: 'ShiftLeft',
      key: 'Shift',
      shiftKey: true,
      keyCode: 16,
      which: 16,
      charCode: 0,
      location: 1,
      isModifierKey: true
    },

    '229': {
      code: 'ShiftRight',
      key: 'Shift',
      shiftKey: true,
      keyCode: 16,
      location: 2,
      isModifierKey: true
    }
  }
}


function createDigitKeys (map = {}) {
  const digits = [
    { key: 0, code: 39, keyCode: 48 },
    { key: 1, code: 30, keyCode: 49 },
    { key: 2, code: 31, keyCode: 50 },
    { key: 3, code: 32, keyCode: 51 },
    { key: 4, code: 33, keyCode: 52 },
    { key: 5, code: 34, keyCode: 53 },
    { key: 6, code: 35, keyCode: 54 },
    { key: 7, code: 36, keyCode: 55 },
    { key: 8, code: 37, keyCode: 56 },
    { key: 9, code: 38, keyCode: 57 },
  ];

  digits.forEach(digit => {
    map[digit.code] = {
      code: `Digit${digit.key}`,
      key: digit.code,
      keyCode: digit.keyCode,
      location: 1,
      isDigit: true,
      isSupportKey: true
    }
  });

  return map;
}

function createAlphaKeys (map = {}) {
  const digits = 'abcdefghijklmnopqrstuvwxyz'.split('');

  digits.forEach((digit, i) => {
    map[(i + 4)] = {
      code: `Key${digit.toUpperCase()}`,
      key: digit,
      keyCode: (i + 4) + 61,
      location: 1,
      isAlpha: true,
      isSupportKey: true
    }
  });

  return map;
}



const keyCodesMap = {
  '43': {
    code: 'Tab',
    key: 'Tab',
    keyCode: 9,
    isTabKey: true
  },

  '45': {
    code: 'Minus',
    key: '-',
    keyCode: 189
  },

  '46': {
    code: 'Equal',
    key: '=',
    keyCode: 187
  },

  '42': {
    code: 'Backspace',
    key: 'Backspace',
    keyCode: 8,
    isSupportKey: true
  },

  '53': {
    code: 'Backquote',
    key: '`',
    keyCode: 192,
    isSupportKey: true
  },

  '40': {
    code: 'Enter',
    key: 'Enter',
    keyCode: 13,
    isSupportKey: true
  },

  '54': {
    code: 'Comma',
    key: ',',
    keyCode: 188,
    isSupportKey: true
  },

  '55': {
    code: 'Period',
    key: '.',
    keyCode: 190,
    isSupportKey: true
  },

  '56': {
    code: 'Slash',
    key: '/',
    keyCode: 191,
    isSupportKey: true
  },

  '51': {
    code: 'Semicolon',
    key: ';',
    keyCode: 186,
    isSupportKey: true
  },

  '52': {
    code: 'Quote',
    key: '\'',
    keyCode: 222,
    isSupportKey: true
  },

  '47': {
    code: 'BracketLeft',
    key: '[',
    keyCode: 219,
    isSupportKey: true
  },

  '48': {
    code: 'BracketRight',
    key: ']',
    keyCode: 221,
    isSupportKey: true
  },

  '49': {
    code: 'Backslash',
    key: '\\',
    keyCode: 220,
    isSupportKey: true
  },

  '41': {
    code: 'Escape',
    key: 'Escape',
    keyCode: 27,
    isEscapeKey: true,
    isSupportKey: true
  },

  ...createModifierKeys(),
  ...createArrowKeys(),
  ...createDigitKeys(),
  ...createAlphaKeys()
}


export default keyCodesMap;