//v 0.0.1

if (typeof dw === 'undefined') {
  var dw = {};
}
dw.cookie = {
  set: function(k, v, opts) {
    var str = '';
    if (opts) {
      for (var i in opts) {
        str += ';' + i + '=' + opts[i]
      }
    }
    document.cookie = k + '=' + encodeURIComponent(v) + str;
  },
  get: function(k) {
    var dc = document.cookie;
    k = k + '=';
    var firstIndex = dc.indexOf(k);
    if (firstIndex !== -1) {
      var lastIndex = dc.indexOf(';', firstIndex);
      lastIndex = lastIndex === -1 ? dc.length : lastIndex;
      firstIndex = firstIndex + k.length;
      dc = dc.substr(firstIndex, lastIndex - firstIndex);
      return decodeURIComponent(dc);
    } else {
      return null;
    }
  },
  expires: new Date(0),
  del: function(k, opts) {
    opts = opts || {};
    opts.expires = this.expires;
    this.set(k, 'del', opts);
  }
}