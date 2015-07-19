/*dw 专用工具包*/
var dw = (typeof module === 'object' && typeof module.exports === 'object') ? module.exports : {};

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
  var index = 0,len = arr.length;
  while (index <= len-1) {
    len = arr.length;
    for (var i = index+1; i < len; i++) {
      if (arr[index] === arr[i]) {
        arr.splice(i, 1);
        index=index-1;
      }
    }
    index=index+1;
  }
}

//把obj2添加到obj1里. 
dw.obj_add = function(obj1,obj2) {
  for (var i in obj2) {
    if (!obj1[i]) {
      obj1[i] = obj2[i];
    }
  }
}

//把obj2合并到obj1里
dw.obj_merge = function(obj1,obj2) {
  for (var i in obj2) {
    if (obj1[i] !==obj2[i]) {
      obj1[i] = obj2[i];
    }
  }
}