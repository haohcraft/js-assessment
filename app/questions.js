// var inc1 = Incrementor();
// var inc2 = Incrementor();

// inc1(); // output 1
// inc1(); // output 2
// inc2(); // output 1
// inc1(); // output 3
// inc2(); // output 2

function Incrementor() {
    var count = 1;
    return function() {
        console.log(count++)
    }
}

//Polyfilled bind
myFunction.prototype.bind= function() {
    var args = [].slice(arguments);
    var thisArg = args[0];
    var restArgs = args.slice(1);
    return function() {
        this.apply(thisArg, restArgs);
    };
}


// To use _.debounce to handle the sequential key stokes' input

// position:absolute -- the element's position is calculated based on that its closest non-staticly positioned ancestor.

// vendor-prefix:
// -webkit- (Chrome, newer versions of Opera.)
// -moz- (Firefox)
// -o- (Old versions of Opera)
// -ms- (Internet Explorer)

// JS linkedlist


// This is the text editor interface. 
// Anything you type or change here will be seen by the other person in real time.

//    ONE
//   +ONE
// ------
//    TWO

//    231
//   +231
// ------
//    462

//   FOUR
//  + ONE
// ------
//   FIVE

//   8140
//   +139
//  -----
//   8279

myExpression = new AdditionExpression("one", "one", "two");
myExpression.eval(proposedSolution) // --> true

class AdditionExpression {
    constructor(first, second, result) 
    
    // gets all characters in the problem as a set
    getChars()

    // proposedSolution: { O: 2, N: 3, E: 1, T:4, W: 6 }
    boolean eval(proposedSolution) {
        
    }
}
function getChars() {
    var args = [].slice(arguments);
    var dict = {};
    return args.reduce(function(result, arg) {
        if(arg && arg.length) {
            for(var v in arg) {
                if(!dict[v]) {
                    result.push(v);    
                    dict[v] = tru;
                }
            }
        }
        return result;
    }, []);
}


function strNum(str, map) {
    var result = 0;
    var arrStr = str.slice(0);
    if(arrStr && arrStr.length) {
        var _arrStr = arrStr.reverse();
        result = _arrStr.reduce(function(r, v, k) {
            var number = map[v];
            if(~number) {
                r = r + v * 10 * k;
            }
            return r;
        }, 0);
    }
    return result;
}

// first = SEVEN
// getChars(first) --> SEVN
function additionExpression(first, second, result) {
    // map = { O: 2, N: 3, E: 1, T:4, W: 6 }
    return function eval(map) {
        var numF = strNum(first, map);
        var numS = strNum(second, map);
        var numR = strNum(result, map);
        return numF + numS === numR;
    }
    
}

// ONE + ONE = TWO
// O, N -> 2 // cannot happen
// 1:1 mapping
// return { O: 2, N: 3, E: 1, T:4, W: 6 }
// solve("ONE", "ONE", "TWO")
var map = {};
var arrNums = [0,1,2,3,4,5,6,7,8,9];
const getMap = (chars, i, j) => {

    if(chars && chars.length === 1) {
        return {
            `${char}`: i
        };
    }

    var first = chars[0];
    var rest = chars.slice(1);

    return {
        ...getMap([first], i, i+1),
        ...getMap(rest, j, j+1)
    }
    
}
function solve(first, second, result) {
    // return correction solution in form of map: {O: 2, N: 1...}
    // all unique characters
    
    var chars = getChars(first + second + result);
    for(var i = 0; i< 10; i++) {
        for(var j = i; j<10; j++){
            var map = getMap(chars, i, j);
            if(additionExpression(first, second, result)(map)) {
                return map;
            }
        }
        
    }
  
}

