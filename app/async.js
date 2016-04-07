exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return Promise.resolve(value);
  },

  manipulateRemoteData : function(url) {
    var req = Promise.resolve($.ajax(url));
    return req.then(function(resp) {
        var names = resp.people.map(function(p) {return p.name;})
        return Promise.resolve(names.sort());
    });

  }
};
