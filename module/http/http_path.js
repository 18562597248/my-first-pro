'use strict';

var path = require('path');

// 解析当前目录:
var workDir = path.resolve('/');        // 'e:\'


// 组合完整的文件路径:当前目录+...+targetFile:
var filePath = path.join(workDir, 'NodeJsWorkspace', 'git','my-first-pro','file','hard.txt');
// 'e:\NodeJsWorkspace\git\my-first-pro\file\hard.txt'

console.log('filePath : '+filePath);

