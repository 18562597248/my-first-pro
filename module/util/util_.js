'use strict';

var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function() {
    console.log(this.name);
};
function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);

//var util = require('util');
function Person() {
    this.name = 'byvoid';
    this.toString = function() {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));             //util.inspect(object,[showHidden],[depth],[colors])
console.log(util.inspect(obj, true));

util.isRegExp(/some regexp/);                            // true        /正则/
util.isRegExp(new RegExp('another regexp'));          // true
util.isRegExp({});                                       // false



//util：{
//  inherits，
//	inspect，
//	isArray(object)，
//	isRegExp(object)，
//	isDate(object)，
//	isError(object)
//}