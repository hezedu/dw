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

module.exports = dw;