var dw = {
  EMPTY_ARR = [],
  EMPTY_OBJ = {},
  EMPTY_FN = function noop(){},

}


$(function() {
  var $EMPTY_OBJ = $('<div></div>');
  var $cmpt = $('#cmpt');
  $cmpt.$dwMountPointPrev = $EMPTY_OBJ;
  var m = $('component');
  var m1 = m.eq(0);
  var m2 = m.eq(1);

  console.log(m1.html());

  console.log(m1.html());

  var view = {
    a: m1
  }


  var view2 = {
    b: m2
  }

  function mount($obj) {
    if ($obj.dwIsMount) {
      console.log('已加载');
      return;
    }
    $cmpt.replaceWith($cmpt.$dwMountPointPrev);
    $cmpt.$dwMountPointPrev.dwIsMount = false;
    $obj.replaceWith($cmpt);
    $cmpt.$dwMountPointPrev = $obj;
    $obj.dwIsMount = true;
  }

  $('#b1').click(function() {
    mount(m1);
  });

  $('#b2').click(function() {
    mount(m2);
  });

})



var component = function(key) {
  this.key = key;
  this.children = {};

}
component.prototype = {
  onPath: function() {},
  onSearch: function() {},
  onLeave: function() {},
  mount: function(obj) {},
  key: ''
}

var t1 = new component();
t1.children.hello = 'wrold';

var t2 = new component();

console.log("t1.children.hello", t1.children);
console.log("t2.children.hello", t2.children);
console.log("prototype.children.hello", component.prototype.children);

var weld = 'weld';
$.fn.tt = function(t){
  return $.extend(this, new t());
}
$EMPTY_OBJ.tt('key', data);

/*$.fn.component = function() {
  $.extend(this, new component());
}

$.fn.mount = function(key, $obj) {
  this.children[key] = $obj;
}*/

