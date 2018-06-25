'use strict';

// 引入hello模块:
var {greet,add} = require('../hello/hello');
//var main = require('../hello/hello');
var s = 'Michael';

greet(s); // Hello, Michael!

add(100,200);

//main.greet(s);
//main.add(100,200);