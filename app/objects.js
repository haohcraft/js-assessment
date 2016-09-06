exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.bind(obj)();
  },

  alterObjects : function(constructor, greeting) {
<<<<<<< HEAD
    //Mutating the constructor is not cool tho
=======
>>>>>>> 67f6ebd161a11b7d1b25e4495b31c9e2c5806943
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    return _.reduce(obj, function(result, v, k) {
        if(obj.hasOwnProperty(k)) result.push('' + k + ': ' + v);
        return result;            
    }, []);
  }
};
