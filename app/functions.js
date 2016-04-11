exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(greeting) {
    return function(name) {
      return "" + greeting + ", " + name;
    }
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(item) {
      return function() {return fn.call(this, item);}
    });
  },

  partial : function(fn, str1, str2) {
    return function(punctuation) {
      return fn.call(this, str1, str2, punctuation);
    }
  },

  useArguments : function() {
    var args = [].slice.call(arguments);
    return args.reduce(function(result, arg) {
      return result + arg;
    }, 0);
  },

  callIt : function(fn) {
    var args = [].slice.call(arguments, 1);
    return fn.apply(this, args);
  },

  partialUsingArguments : function(fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
      var _args = [].slice.call(arguments);
      return fn.apply(this, args.concat(_args));
    };
  },

  curryIt : function(fn) {
    
    return function curriedFn(){
      var args = [].slice.call(arguments);
      if(args.length < fn.length){
        return function(){
          return curriedFn.apply(null, args.concat( [].slice.call(arguments) ));
        };
      }

      return fn.apply(null, args);
    };
  }
};
