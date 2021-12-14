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



console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8