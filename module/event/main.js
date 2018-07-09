'use strict';

var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function(){
    console.log('connect success');
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received',function(){
    console.log('get data');
});

eventEmitter.emit('connection');

console.log('process finish');