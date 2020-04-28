const caesarChipher = (str, num) => {
  return str
    .replace(/[a-z]/g, (m) => {
      let code = m.charCodeAt(0) + num;
      code = code > 122 ? (code -= 26) : code;
      return String.fromCharCode(code);
    })
    .replace(/[A-Z]/g, (m) => {
      let code = m.charCodeAt(0) + num;
      code = code > 90 ? (code -= 26) : code;
      return String.fromCharCode(code);
    });
};

export default caesarChipher;
