var dw = require('./dw');
var log = console.log;



var t1 ={
  a:'a',
  b:'b'
}
var t2 ={
  a:'a1',
  b:'b',
  c:'c'
}

dw.obj_add(t1,t2);
console.log(t1);



process.stdin.resume();