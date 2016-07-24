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
  nu:null,
  reg:/kkk/,
  end: 'end'
}
/*dw.ite(test, function(v,i,isArray){
  if(isArray){
    console.log(i);
  }else{
    console.log('"' + i + '"');
  }
  //console.log(this);
})*/




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




/*console.log(t2)
for(var i in t2){
  if()
  console.log(i)
}*/


var MAX = 1000000;
var t1 = dw.copy(test);
console.log(t1)

console.log('开始(一):');
var startTime = Date.now();
for(var i =0; i < MAX; i++){
  dw.copy(test)
}

console.log('用时:', Date.now()-startTime);

console.log('开始(二):');
startTime = Date.now();
for(var i =0; i < MAX; i++){
  //dw.copy2(test)
}
console.log('用时:', Date.now()-startTime);


/*suite
// add tests
.add('dw.copy2', function() {
  dw.copy(t2);
})
.add('dw.copy', function() {
  dw.copy(test);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });

function noop(){}
function noop2(v,i,isArray){
  if(isArray){

  }
}*/