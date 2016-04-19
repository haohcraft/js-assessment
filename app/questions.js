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

