var dw = {};

dw.type = Object.prototype.toString;
dw.ARR = '[object Array]';
dw.FN = '[object Function]';
dw.OBJ = '[object Object]';

dw.ite = function ite(t, fn) {
  switch (this.type.call(t)) {
    case this.OBJ: //obj
      for (var i in t) {
        var v = t[i];
        fn(v, i, t, 'obj');
        this.ite(v, fn);
      }
      break;
    case this.ARR: //arr
      for (var i = 0, len = t.length; i < len; i++) {
        var v = t[i];
        fn(v, i, t, 'arr');
        this.ite(v, fn);
      }
      break;
    default:
      return false;
  }
}


dw.ite2 = function ite(obj, fn) {
  this._ite([obj], 0, fn);
}
dw._ite = function _ite(t, i, fn) {
  var v = t[i];
  switch (this.type.call(t[i])) {
    case this.OBJ: //obj
      fn(v, i, t, 'obj');
      for (var j in v) {
        this._ite(v, j, fn);
      }
      break;
    case this.ARR: //arr
      fn(v, i, t, 'arr');
      for (var j = 0, len = v.length; j < len; j++) {
        this._ite(v, j, fn);
      }
      break;
    default:
      fn(t, i, v);
  }
}

var test = {
  'start': 'astartbc',
  arr: ['ggg', 'hehe'],
  obj:{
    a1:'a1',
    b1:'b1'
  },
  arr_obj: [{ao1:'ao1', ao2: 'ao1'}],
  obj_arr:{
    oa1: ['oa2', 'oa3']
  },
  end: 'end'
}



var MAX = 9999999, count = 100;
count = 0;
function objGetV(c, fn, param, param2){

  console.log('start');
  var startTime = Date.now();
  for(var i =0;i< MAX; i++){
    dw[fn](param, param2);
  }
  console.log('end:' + c, Date.now() - startTime);

  if(c < count){
    //testObj['key' + c] = 'key' + c;
    objGetV(c+1,fn, param, param2);
  }else{
    console.log('=========================');
  }
}
function noop(v,i){/*console.log(i)*/};

objGetV(0, 'ite', test, noop)

module.exports = dw;