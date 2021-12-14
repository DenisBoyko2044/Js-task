var count = function (obj) {
    var count = 0;
    for (var item in obj) {
        count++;
    }
    return count;
};
var a = { a: 1, b: 2 };
console.log(count(a)); // 2
var b = function () { };
console.log(count(b)); // 0
var c = [1, 2, 3];
console.log(count(c)); // 3
var d = [];
d[100] = 1;
console.log(count(d)); // 1