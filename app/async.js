exports = (typeof window === 'undefined') ? global : window;
exports.asyncAnswers = {
  async : function(value) {
    return Promise.resolve(value);
  },

  manipulateRemoteData : function(url) {
    var req = this.async($.ajax(url));
    var _this = this;
    return req.then(function(resp) {
        var names = resp.people.map(function(v) {return v.name;});
        return _this.async(names.sort());
    });  
  }
};
