'use strict';
var fs = require('fs');
var rs1 = fs.createReadStream('../../file/hard.txt','utf-8');
var ws1 = fs.createWriteStream('../../file/copy.text','utf-8');

rs1.pipe(ws1);