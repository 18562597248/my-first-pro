'use strict';

var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('../../file/hard.txt','utf-8').pipe(zlib.createGzip()).pipe(fs.createWriteStream('../../file/zip/hard.txt.gz'));