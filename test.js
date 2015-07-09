var dw = require('./dw');
var log = console.log;



var a = new Array('a','b','c');
var b =['c','d','e'];

dw.arr_merge(a,b);

log(a);

a.push('c');
log(a);

dw.arr_unique(a);
console.log("arr_unique");
log(a);





process.stdin.resume();