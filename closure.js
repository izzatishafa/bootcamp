function incrementerBy (index) {
    return function (nr) {
        // do stuff here
        // the index variable is available from here
        return index + nr;
    };
}

var incrementers = {};
for (var i = 1; i < 4; i++) {
    incrementers['by' + i] = incrementerBy(i);
}
console.log(incrementers.by1(4)); //3
console.log(incrementers.by2(4)); //4
console.log(incrementers.by3(4)); //5