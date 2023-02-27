// hello = function() {
//     return "Hello World!";
// }

// hello () => {
//     return "Hello World";
// }

//before 
var names= ["Izzati", "Shafa", "Dinda"]

    .map(function(names) {

        return names.toUpperCase();

});

console.log(names);

//after
var names= ["Izzati", "Shafa", "Dinda"]

    .map(name => name.toUpperCase());

    console.log(names);

