exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.bind(obj)();
  },

  alterObjects : function(constructor, greeting) {
    //Mutating the constructor is not cool tho
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    return _.reduce(obj, function(result, v, k) {
        if(obj.hasOwnProperty(k)) result.push('' + k + ': ' + v);
        return result;            
    }, []);
  }
};
