const crypto = require('crypto');

//const hmac = crypto.createHmac('sha256','secret-key');
const hmac = crypto.createHmac('sha256','asdfghjkl');

hmac .update('export world!' );

console.log(hmac.digest('hex'));