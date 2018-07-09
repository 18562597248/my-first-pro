'use strict';

// 引入hello模块:
var {greet,add} = require('../export/hello');
//var import = require('../export/export');
var s = 'Michael';

greet(s); // Hello, Michael!

add(100,200);

//import.greet(s);
//import.add(100,200);