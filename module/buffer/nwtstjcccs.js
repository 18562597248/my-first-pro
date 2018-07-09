'use strict';

const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10,1);    //多余填充

const buf3 = Buffer.from([1,2,3]);
const buf4 = Buffer.from('test');

const buf = Buffer.alloc(256);
var len = buf.write("music.163.com");   //buf.write(string, [offset, [length]], [encoding])
//console.log("len :"+len);

var buf5 = Buffer.alloc(26);

for(var i = 0 ; i < 26 ; i++){
    buf5[i] = i + 97;
}
//console.log(buf5.toString('ascii'));      //buf.toString([encoding,[start,[end]]])
//console.log(buf5.toString('ascii',0,5));
//console.log(buf5.toString('utf-8',0,5));
//console.log(buf5.toString(undefined,0,5));

//const buf6 = Buffer.from([0x1,0x2,0x3,0x4,0x5]);
const buf6 = Buffer.from([1,2,3,4,5]);
const json = JSON.stringify(buf6);
//console.log(json);

const copy = JSON.parse(json,(key,value)=>{
    return value&&value.type=='Buffer' ? Buffer.from(value.data) : value;
});
//console.log(copy);

const buf7 = Buffer.from('changjp');
const buf8 = Buffer.from('_SanYeV587');
const buf9 = Buffer.concat([buf7,buf8]);        //Buffer.concat(list,[totalLength])
//console.log('buf9 : '+buf9.toString());

const buf10 = Buffer.from('changjp_SanYeV587');
var result = buf10.compare(buf9);
var result1 = buf7.compare(buf9);
var result2 = buf9.compare(buf8);
//console.log(result);
//console.log(result1);
//console.log(result2);

const buf11 = Buffer.from('changjp');
var buf12 = Buffer.alloc(10,'1');
buf11.copy(buf12,2,0,5);                //buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
//console.log(buf12.toString());

const buf13 = Buffer.from('changjp');                   //buf.slice([start[, end]])
var buf14 = buf13.slice(1,4);
console.log(buf14.toString());

