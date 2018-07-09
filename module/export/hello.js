'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}
function add(a,b){
    console.log(a+b);
}
module.exports = {
    greet:greet,
    add:add
};
