exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var result = [];
    var files = data.files || [];
    var dirTarget = dirName;
    var dir = data.dir || "";
    var isTarget = !dirName || dirTarget === dir;
    var _this = this;
    var getRest = function(arr) {return arr && arr.length ? arr.slice(1) : [];};
    var getFirst = function(arr) {return arr ? arr[0] : undefined;};

    if(files.length) {
        var first = getFirst(files);
        var rest  = getRest(files);
        if(first && typeof first === "string") {
            isTarget && result.push(first);
        } else {
            result = result.concat(_this.listFiles({
                dir: isTarget ? dir : first.dir,
                files: first.files && first.files.length ? first.files : [] 
            }, dirName));
        }

        result = result.concat(_this.listFiles({
            dir: dir,
            files: rest
        }, dirName));
    } 
    return result;
  },

  permute: function(arr) {
    var result = [];
    var _this = this;
    var getRest = function(arr, target) {
        if(arr && arr.length) {
            return arr.reduce(function(result, item) {
                if(item !== target) result.push(item);
                return result;
            }, []);

        } else {
            return [];
        }
    }

    if(arr && arr.length > 1) {
        for(var i = 0; i < arr.length; i++) {
            var item = arr[i];
            var rest = getRest(arr, item);
            var subpermute = _this.permute(rest)
            var _result = subpermute.map(function(permuted) {
                return [item].concat(permuted);
            });
            result = result.concat(_result);
        }

    } else {
        result = result.concat(arr);
    }

    return result;
  },

  fibonacci: function(n) {
    if(n < 3) return 1;
    
    return this.fibonacci(n-2) + this.fibonacci(n-1);
  },

  validParentheses: function(n) {
    var base = ["(", ")"];
    var dedupe = function(arr) {
        var map = {};
        return arr.reduce(function(result, item) {
            var itemString = item.join("");
            if(!map[itemString]) {
                map[itemString] = true;
                result.push(item);
            }
            return result;
        }, []);
    };
    var getValidParenthesesArr = function(n) {
        if(n < 2) {
            return [base];
        }
        var result = [];
        var pre = getValidParenthesesArr(n - 1);
        pre.forEach(function(item) {
            if(item && item.length >= 2) {
                for(i = 1; i < item.length; i++) {
                    var left = item.slice(0, i);
                    var right = item.slice(i);
                    result.push(base.concat(item));
                    result.push(left.concat(base).concat(right) );
                    result.push(item.concat(base));
                }
            } else {
                return [item];
            }
        });

        return dedupe(result);
    }

    var validParenthesesArr = getValidParenthesesArr(n);
    return validParenthesesArr.map(function(item) {
        return item.join("");
    });
  }
};
