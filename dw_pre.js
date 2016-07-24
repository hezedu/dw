var dw = {};

/*dw.type = Object.prototype.toString;
dw.ARR = '[object Array]';
dw.FN = '[object Function]';
dw.OBJ = '[object Object]';*/


function noop() {};
dw.noop = noop;

function ite(t, fn) {
  if (typeof t === 'object') {
    if (Array.isArray(t)) { //IE 9
      for (var i = 0, len = t.length; i < len; i++) {
        var v = t[i];
        fn.call(t, v, i, true);
        ite(v, fn);
      }
    } else {
      for (var i in t) {
        var v = t[i];
        fn.call(t, v, i, false);
        ite(v, fn);
      }
    }
  }
}

dw.ite = ite;



//复制tasks, 深递归
var sas = {}
sas.copy = function(t) {
  var c = [];
  _copy([t], 0, c);
  return c[0];
}


function _copy(t, i, c) {
  var v = t[i];
  if (typeof v === 'object') {
    if (Array.isArray(v)) {
      c[i] = [];
      for (var j = 0, len = v.length; j < len; j++) {
        _copy(v, j, c[i]);
      }
    } else {
      c[i] = {};
      for (var j in v) {
        _copy(v, j, c[i]);
      }
    }
  } else {
    c[i] = v;
  }
}

module.exports = sas;