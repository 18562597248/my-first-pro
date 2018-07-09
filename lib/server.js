'use strict';

var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    util = require('util'),
    http = require('http');

var root = path.resolve('./src');
function start(){
    function onRequest(request,response){
        //console.log('request : '+util.inspect(request));
        //console.log('response : '+util.inspect(response));
        var pathname = url.parse(request.url).pathname;
        console.log('Request for '+pathname+' received');
        var filepath = path.join(root,pathname);
        fs.stat(filepath,(err,stat)=>{
            if(!err&&stat.isFile()){
                response.writeHead(200,{'Content-type':'text/html'});       //{'Content-type':'text/plain'}
                fs.createReadStream(filepath,'utf-8').pipe(response);
                // read write end
            }else{
                response.writeHead(404);
                response.end('404 Not Found');
            }
        });
    }
    http.createServer(onRequest).listen(8080);
    console.log('Server is running at http://127.0.0.1:8080/');
}

exports.start = start;

