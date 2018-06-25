'use strict';

var fs = require('fs');

var data = 'hello , node.js     ---- from Async';
fs.writeFile('../../file/output.txt',data,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Async write ok.');
    }
});

var data2 = 'hello ~, node.js    ---- from Sync';
fs.writeFileSync('../../file/output2.txt',data2);
console.log('Sync write ok.');