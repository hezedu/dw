var dw = require('./dw');
var log = console.log;

var bValue;

function test(){
  console.log('test')
}

var bind_data = function(t, i) {
  //console.log(i)
    var tmp;
    Object.defineProperty(t, i, {
      get :function(){
        console.log('get '+tmp);
        return tmp; 
      },
      set: function(val) {
        test();
        tmp = val+1;
      }
    });
  }

var t1 ={
  ka:'a',
  kb:'b'
}
var t2 ={
  a:'a1',
  b:'b',
  c:'c'
}

dw.obj_ite(t1,bind_data);

bind_data(t1,'ka');
t1.ka = '3333'
console.log('delete:')
//delete(t1.ka);

t1.ka = undefined;


//process.stdin.resume();