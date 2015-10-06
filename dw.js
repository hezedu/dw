/*dw 专用工具包*/
var dw = (typeof module === 'object' && typeof module.exports === 'object') ? module.exports : {};

//来自 sas
//设置属性，不可被更改，删除。 可见，不会报错。
dw.not_modfiy = function(t, k, v) {
  Object.defineProperty(t, k, {
    value: v,
    writable: false,
    configurable: false,
    enumerable: true
  });
}

dw._define = function(k, v) {
  this.not_modfiy(this, k, v);
}

dw._define('type', Object.prototype.toString);
dw._define('ARR', '[object Array]');
dw._define('FN', '[object Function]');
dw._define('OBJ', '[object Object]');


//复制一个变量, 深递归
dw.copy = function(t) {
  var c = [];
  dw._copy([t], 0, c);
  c = c[0];
  return c;
}

dw._copy = function(t, i, c) {
    switch (this.type.call(t[i])) {
      case this.OBJ: //obj
        c[i] = {};
        for (var j in t[i]) {
          this._copy(t[i], j, c[i]);
        }
        break;
      case this.ARR: //arr
        c[i] = [], len = t[i].length;
        for (var j = 0; j < len; j++) {
          this._copy(t[i], j, c[i]);
        }
        break;
      default:
        c[i] = t[i];
    }
  }
  //来自 sas end;

//把arr2合并到arr1里,不重复. 
dw.arr_merge = function(arr1, arr2) {
  var len2 = arr2.length;
  for (var i = 0; i < len2; i++) {
    if (arr1.indexOf(arr2[i]) !== -1) {
      arr1.push(arr2[i]);
    }
  }
}

//去掉arr里重复的值
dw.arr_unique = function(arr) {
  var index = 0,
    len = arr.length;
  while (index <= len - 1) {
    len = arr.length;
    for (var i = index + 1; i < len; i++) {
      if (arr[index] === arr[i]) {
        arr.splice(i, 1);
        index = index - 1;
        break;
      }
    }
    index = index + 1;
  }
}

//来自https://jex.im/programming/fast-javascript-array-unique.html
dw.slowUnique= function(ary) {
  var ret = [],i,j,l = ary.length;
  outer:
  for(i=0; i<l; i++) {
    j=ret.length;
    p=ary[i];
    while(j--) {
      if (ret[j]===p) continue outer;
    }
    ret.push(p);
  }
  return ret;
}

//把obj2添加到obj1里. 
dw.obj_add = function(obj1, obj2) {
  for (var i in obj2) {
    if (!obj1[i]) {
      obj1[i] = obj2[i];
    }
  }
}

//把obj2合并到obj1里
dw.obj_merge = function(obj1, obj2) {
  for (var i in obj2) {
    if (obj1[i] !== obj2[i]) {
      obj1[i] = obj2[i];
    }
  }
}

//把对象或数组全部属性变成不可更改 更改会抛错
dw.const_init = function(t) { //递归 调用 const_set
  var ty = Object.prototype.toString.call(t);
  switch (ty) {
    case this.OBJ:
      for (var i in t) {
        this.const_set(t, i, t[i]);
        this.const_init(t[i]);
      }
      break;
    case this.ARR:
      for (var i = 0, len = t.length; i < len; i++) {
        this.const_set(t, i, t[i]);
        this.const_init(t[i]);
      }
      break;
    default:
  }
}

//设置成属性不可更改-删除  更改会抛错
dw.const_set = function(t, k, v) {
  Object.defineProperty(t, k, {
    configurable: false,
    enumerable: true,
    get: function() {
      return v
    },
    set: function setter(val) {
      throw new Error('glo-const Err:property "' + k + '" can\'t modify!');
    }
  });
}


/*
递归 + 没常量 + copy
dw.const_ite = function(t, i, o) {
  var ty = Object.prototype.toString.call(o);
  switch (ty) {
    case '[object Object]':
      dw.setConst(t, i, {});
      for (var j in o) {
        dw.const_ite(t[i], j, o[j]);
      }
      break;
    case '[object Array]':
      dw.setConst(t, i, []);
      for (var j = 0, len = o.length; j < len; j++) {
        dw.const_ite(t[i], j, o[j]);
      }
      break;
    default:
      dw.setConst(t, i, o);
  }
}

*/
