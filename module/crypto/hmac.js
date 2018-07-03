const crypto = require('crypto');

//const hmac = crypto.createHmac('sha256','secret-key');
const hmac = crypto.createHmac('sha256','asdfghjkl');

hmac .update('hello world!' );

console.log(hmac.digest('hex'));