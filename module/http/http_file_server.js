'use strict';

var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');


var root = path.resolve(process.argv[2] || '.');                    // 从命令行参数获取root目录，默认是当前目录:
var root_ = path.resolve("./../../src")
//console.log('Static root dir: ' + root);


var server = http.createServer(function (request, response) {       // 创建服务器:
    var pathname = url.parse(request.url).pathname;                  // 获得URL的path，类似 '/css/bootstrap.css':
    var filepath = path.join(root_, pathname);                         // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    fs.stat(filepath, function (err, stats) {                         // 获取文件状态:
        if (!err && stats.isFile()) {                                   // 没有出错并且文件存在:
            //console.log('200 ' + request.url);
            response.writeHead(200);                                    // 发送200响应:
            fs.createReadStream(filepath).pipe(response);               // 将文件流导向response:
        } else {                                                        // 出错了或者文件不存在:
            //console.log('404 ' + request.url);
            response.writeHead(404);                                    // 发送404响应:
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');