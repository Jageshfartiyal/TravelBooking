// Nodejs encryption with CTR
const crypto = require('crypto');
const cryptoJs = require('crypto-js');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const { IV } = process.env;
const { KEY_CHECK } = process.env;

function encrypt(text) {
  return cryptoJs.AES.encrypt(text, IV).toString();
}

function decrypt(arg) {
  try {
    if (arg?.includes(KEY_CHECK)) {
      var bytes = cryptoJs.AES.decrypt(arg, IV);
      var decryptedData = bytes.toString(cryptoJs.enc.Utf8);
      // console.log("The Decrypted Data", decryptedData)
      return decryptedData;
    } else {
      return arg;
    }
  } catch (error) {
    return arg;
  }
}

module.exports = {
  encrypt,
  decrypt,
};
