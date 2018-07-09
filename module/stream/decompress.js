'use strict';

var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('../../file/zip/hard.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('../../file/unzip/hard.txt','utf-8'));