const caesarChipher = (str, num) => str.replace(/[a-z]/g, (m) =>
  String.fromCharCode(((m.charCodeAt(0) + num - 97) % 26) + 97)
).replace(/[A-Z]/g, (m) =>
  String.fromCharCode(((m.charCodeAt(0) + num - 65) % 26) + 65)
);

export default caesarChipher;
