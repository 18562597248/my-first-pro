'use strict';
                                //fs.open(path, flags, [mode], callback)
var fs = require('fs');

fs.readFile('../../file/sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('Async: '+data);
    }
});
fs.readFile('../../file/斜眼笑.png',function(err,data){
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
        //var text = data.toString('utf-8');
        //console.log(text);
    }
})
var data_t = fs.readFileSync('../../file/hard.txt', 'utf-8');
console.log('Sync: '+data_t);