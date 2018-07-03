const crypto = require('crypto');

const hash = crypto.createHash('md5');
//const hash = crypto.createHash('sha1');
//const hash = crypto.createHash('sha256');     //sha512

hash.update('hello node !');
//hash.update('你好 node');
//hash.update('hello world !');

console.log(hash.digest('hex'));