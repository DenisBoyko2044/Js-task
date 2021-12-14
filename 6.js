var partialAny = function (func) {
    var Mparams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        Mparams[_i - 1] = arguments[_i];
    }
    var obj = { e: 0 };
    return function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        for (var Mitem in Mparams) {
            if (Mparams[Mitem] === undefined) {
                Mparams[Mitem] = params[obj.e];
                params.splice(obj.e--, 1);
                obj.e++;
            }
        }
        Mparams = Mparams.concat(params);
        Mparams.splice(func.length, Mparams.length - func.length);
        console.log(Mparams);
        return func.apply(null, Mparams);
    };
};

function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }
var test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5)); // a=1,b=5,c=3