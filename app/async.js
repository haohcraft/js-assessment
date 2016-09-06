exports = (typeof window === 'undefined') ? global : window;
exports.asyncAnswers = {
  async : function(value) {
    return Promise.resolve(value);
  },

  manipulateRemoteData : function(url) {
<<<<<<< HEAD
    var req = this.async($.ajax(url));
    var _this = this;
    return req.then(function(resp) {
        var names = resp.people.map(function(v) {return v.name;});
        return _this.async(names.sort());
    });  
=======
    var req = Promise.resolve($.ajax(url));
    return req.then(function(resp) {
        var names = resp.people.map(function(p) {return p.name;})
        return Promise.resolve(names.sort());
    });

>>>>>>> 67f6ebd161a11b7d1b25e4495b31c9e2c5806943
  }
};
