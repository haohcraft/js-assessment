exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timeout;
    var TIME = 100;
    var _this = this;

    if(start < end) {
        console.log(start);
        timeout = setTimeout(function() {
            _this.cancel();
            _this.count(start + 1, end);
        }, TIME );
    } else {
        console.log(start);
    }

    this.cancel = function() {
        if(timeout) clearTimeout(timeout);
    }

    return this;
  }
};
