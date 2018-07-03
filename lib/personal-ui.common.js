'use strict';

var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

var root = path.resolve('./src');
var server = http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root,pathname);
    fs.stat(filepath,function(err,stat){
        if(!err && stat.isFile()){
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        } else {
            response.writeHead(404);
            fs.creatWriteStream("404");
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');