var generator = sequence(10, 3);
var generator2 = sequence(7, 1);
function sequence(start, step) {
    start = start ;
    step = step ;
    start -= step;
    return function() {
        return start += step;
    }
}

var take = function (func, count) {
    var some = [];
    for (var i = 0; i < count; i++) {
        some.push(func());
    }
    return some;
};

var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]