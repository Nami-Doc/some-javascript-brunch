(function(){
  var SomeJavaScriptCompiler;
  module.exports = SomeJavaScriptCompiler = (function(){
    SomeJavaScriptCompiler.displayName = 'SomeJavaScriptCompiler';
    var prototype = SomeJavaScriptCompiler.prototype, constructor = SomeJavaScriptCompiler;
    prototype.brunchPlugin = true;
    prototype.type = 'javascript';
    prototype.extension = 'js';
    function SomeJavaScriptCompiler(config){
      this.files = config.plugins.javascripts;
    }
    prototype.isValid = function(it){
      return in$(it, this.files) || 0 === it.indexOf('vendor/scripts/brunch');
    };
    prototype.compile = function(data, path, callback){
      var e;
      try {
        path = path.replace(/\\/g, '/');
        callback(null, this.isValid(path) ? data : null);
      } catch (e$) {
        e = e$;
        callback(e);
      }
    };
    return SomeJavaScriptCompiler;
  }());
  function in$(x, arr){
    var i = -1, l = arr.length >>> 0;
    while (++i < l) if (x === arr[i] && i in arr) return true;
    return false;
  }
}).call(this);
