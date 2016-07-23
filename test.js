var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;
var dw = require('./dw_pre');


var test = {
  'start': 'astartbc',
  arr: ['ggg', 'hehe'],
  obj: {
    a1: 'a1',
    b1: 'b1'
  },
  arr_obj: [{
    ao1: 'ao1',
    ao2: 'ao1'
  }],
  obj_arr: {
    oa1: ['oa2', 'oa3']
  },
  end: 'end'
}
dw.ite(test, function(v,i,isArray){
  if(isArray){
    console.log(i);
  }else{
    console.log('"' + i + '"');
  }
  console.log(this);
})
/*dw.iteNew(test,{
  arr: function(v,i){
    console.log(i);
  },
  obj: function(v,i){
    console.log(i);
  }
})

dw._ite2(test,function(v,i){
    console.log(i);
  });*/


suite
.add('iteNew#2', function() {
  dw.iteNew(test, noop);
})
// add tests
.add('_ite2#1', function() {
  dw._ite2(test, noop2);
})

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
//.run({ 'async': true });

function noop(){}
function noop2(v,i,isArray){
  if(isArray){

  }
}