'use strict';

var eventEmitter = require('events').EventEmitter;

var event = new eventEmitter();

event.on('sToevent',function(){
    console.log('sToevent event !');
});

setTimeout(function(){
    event.emit('sToevent');
},1000);