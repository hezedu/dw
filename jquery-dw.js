/*dw jquery专用工具包*/

//左右居中
$.fn.dw_autoM = function() {
  var flo = this.css('float');
  this.css('float', 'left');
  var pwidth = this.parent().width(),
    width = this.width();
  this.css({
    'margin-left': (pwidth - width) / 2,
    'float': flo
  });
  //this.css('float','none');
  return this;
}

//上下居中
$.fn.dw_autoH = function() {
  var pheight = this.parent().height(),
    height = this.height();
  this.css('margin-top', (pheight - height) / 2);
  return this;
}

//上下左右都居中
$.fn.dw_cross = function() {
  return this.dw_autoH().dw_autoM();
}