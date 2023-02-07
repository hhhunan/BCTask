class Utils {
  static isEmail = (email) => {
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailReg.test(String(email).toLowerCase());
  };

  static keyPressOnlyNumber = (e, past, positiveNumber, maxLength, maxValue) => {
    let { value } = e.target;
    const { selectionStart, selectionEnd } = e.target;
    value = value.replace('%', '');

    const pastValueWithCurrentValue = value.slice(0, selectionStart) + (e?.clipboardData?.getData('text') || '');

    const val = past
      ? pastValueWithCurrentValue
      : (value.length && value.length === value.substring(selectionStart, selectionEnd).length
        ? e.key
        : value.substring(0, selectionStart) + e.key + value.substring(selectionStart, value.length));

    const valueToNumber = +val;
    const firstNumber = val.slice(0, 1);
    // console.log(val, firstNumber);

    if (e.which === 32 || (positiveNumber && +firstNumber === 0)
      || isNaN(valueToNumber) || (maxLength && val.length > maxLength)
      || val.includes('.') || val.includes('e') || (maxValue && valueToNumber > maxValue)) {
      e.preventDefault();
    }
  };

  static keyPressPhoneNumber = (e, past) => {
    const { selectionStart, selectionEnd, value } = e.target;
    const pastValueWithCurrentValue = value.slice(0, selectionStart) + (e?.clipboardData?.getData('text') || '');

    const val = past
      ? pastValueWithCurrentValue
      : (value.length && value.length === value.substring(selectionStart, selectionEnd).length
        ? e.key
        : value.substring(0, selectionStart) + e.key + value.substring(selectionStart, value.length));

    if (!/^[0-9()\-+]*$/.test(val)) {
      e.preventDefault();
    }
  };
}

export default Utils;
