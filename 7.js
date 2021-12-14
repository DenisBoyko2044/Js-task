window.x = 1;
var ctx = { x: 2 };

var bind = function (func, ctx) {
    return function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return func.apply(ctx, params);
    };
};


function testThis(a) { console.log("x=" + this.x + ", a=" + a); }
console.log(testThis(100)); // x=1, a=100
var boundFunction = bind(testThis, ctx);
console.log(boundFunction(100)); // x=2, a= 100