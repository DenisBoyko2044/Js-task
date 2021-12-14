var map = function (func, arr) {
    var array = [];
    for (var item in arr) {
        array.push(func(arr[item]));
    }
    return array;
};

function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []