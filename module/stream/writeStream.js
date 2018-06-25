'use strict';
var fs = require('fs');
var ws1 = fs.createWriteStream('../../file/output1_WS.txt','utf-8');
ws1.write('使用fs的输入流写入数据... \n');
ws1.write('结束输入！');
ws1.end();

var ws2 = fs.createWriteStream('../../file/output2_WS.txt','utf-8');
ws2.write(new Buffer('使用fs的输入流写入二进制数据... \n'));
ws2.end(new Buffer('结束输入！'));
ws2.end();