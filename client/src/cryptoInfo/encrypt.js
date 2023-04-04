//const crypto = require("crypto");
import {crypto} from "crypto";
// https://www.section.io/engineering-education/data-encryption-and-decryption-in-node-js-using-crypto/

//const algorithm = "aes-256-cbc";
//const initVector = crypto.randomBytes(16);
//const message = "This is a secret message";
//const Securitykey = crypto.randomBytes(32);

export default function encrypt(obj) {
  const cipher = crypto.createCipheriv("aes-256-cbc", crypto.randomBytes(32), crypto.randomBytes(16));
  let encryptedData = cipher.update(obj, "utf-8", "hex");
  encryptedData += cipher.final("hex");
  console.log("Encrypted message: " + encryptedData);
  return encryptedData;
}
