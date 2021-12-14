var pluck = function (arr, name) {
    var result = [];
    for (var Aitem in arr) {
        for (var Oitem in arr[Aitem]) {
            Oitem === name ? result.push(arr[Aitem][Oitem]) : null;
        }
    }
    return result;
};

var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
  ];
  
  console.log(pluck(characters, 'name')); // ['barney', 'fred']