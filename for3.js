// let loop = ``;
// let n = 7;
// for (let x = 0; x < n; x++) {
//   for (let y = 0; y < n; y++) {
//     if ((x == 0) & (y == 3)) {
//     loop += ` ##### `; 
//     } else if ((x == 1) & (y == 3)) {
//     loop += ` ##### `;  
//     } else if ((x == 2) & (y == 3)) {
//     loop += ` ##### `;  
//     } else if ((x == 3) & (y == 3)) {
//     loop += ` ##### `;  
//     } else if ((x == 4) & (y == 3)) {
//     loop += ` ##### `; 
//     } else if ((x == 5) & (y == 3)) {
//     loop += ` ##### `;
//     } else if ((x == 6) & (y == 3)) {
//     loop += ` ##### `; 
//     } else if ((x == 1) & (y == 2)) {
//     loop += ` ##### `; 
//     } else if ((x == 1) & (y == 4)) {
//     loop += ` ##### `;
//     } else if ((x == 2) & (y == 2)) {
//     loop += ` ##### `; 
//     } else if ((x == 2) & (y == 4)) {
//     loop += ` ##### `; 
//     } else if ((x == 2) & (y == 1)) {
//     loop += ` ##### `; 
//     } else if ((x == 2) & (y == 5)) {
//     loop += ` ##### `; 
//     } else if ((x == 3) & (y == 1)) {
//     loop += ` ##### `; 
//     } else if ((x == 3) & (y == 2)) {
//     loop += ` ##### `; 
//     } else if ((x == 3) & (y == 4)) {
//     loop += ` ##### `; 
//     } else if ((x == 3) & (y == 5)) {
//     loop += ` ##### `; 
//     } else if ((x == 3) & (y == 6)) {
//     loop += ` ##### `; 
//     } else if ((x == 3) & (y == 0)) {
//     loop += ` ##### `; 
//     } else if ((x == 4) & (y == 0)) {
//     loop += ` ##### `; 
//     } else if ((x == 4) & (y == 1)) {
//     loop += ` ##### `; 
//     } else if ((x == 4) & (y == 2)) {
//     loop += ` ##### `; 
//     } else if ((x == 4) & (y == 4)) {
//     loop += ` ##### `; 
//     } else if ((x == 4) & (y == 5)) {
//     loop += ` ##### `;  
//     } else if ((x == 4) & (y == 6)) {
//     loop += ` ##### `;  
//     } else if ((x == 5) & (y == 0)) {
//     loop += ` ##### `;  
//     } else if ((x == 5) & (y == 1)) {
//     loop += ` ##### `; 
//     } else if ((x == 5) & (y == 2)) {
//     loop += ` ##### `; 
//     } else if ((x == 5) & (y == 4)) {
//     loop += ` ##### `; 
//     } else if ((x == 5) & (y == 5)) {
//     loop += ` ##### `; 
//     } else if ((x == 5) & (y == 6)) {
//     loop += ` ##### `;
//     } else if ((x == 6) & (y == 0)) {
//     loop += ` ##### `; 
//     } else if ((x == 6) & (y == 1)) {
//     loop += ` ##### `;  
//     } else if ((x == 6) & (y == 2)) {
//     loop += ` ##### `;  
//     } else if ((x == 6) & (y == 4)) {
//     loop += ` ##### `;  
//     } else if ((x == 6) & (y == 5)) {
//     loop += ` ##### `; 
//     } else if ((x == 6) & (y == 6)) {
//     loop += ` ##### `;  
//     } else {
//     loop += ` (${x},${y}) `;
//     }
//   }
//   loop += `\n`;
// }
// console.log(loop)


// let rows = 5;
// for (let i = 0; i < rows; i++) {
//     var output = '';
//     for (let j =0; j < rows - i; j++) output += ' ';
//     for (let k = 0; k <= i; k++) output += '* ';
//     console.log(output);  
// } 

// let rows = 5;
// let row = '';
// let i = 0;
// while (i < rows){
//     row += '';
//     let j = 0;
//     while (j < rows - i){
//         row +=' ';
//         j++
//     }
//     let k = 0;
//     while (k <= i){
//         row += '*';
//         k++
//     }
//     row += '\n';
//     i++
// }
// console.log(row);


// function kotak(panjang) {
//     let hasil = '';
//     for (let i = 0; i < panjang; i++) {
//         for (let j = 0; j < panjang; j++) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(kotak(10));

// let kotak = "10";
// let hasil = "";
// let i = "0";
// while (i < 10) {
//     let j = "0";
//     while ( j < 10) {
//         hasil += "* "
//         j++
//     }
//     hasil += '\n';
//     i++
// }
// console.log(hasil);


// var s = "";

// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j <= i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// var s = "";
// var i = "0";
// while(i < 5){
//     var j = "0";
//     while(j <= i) {
//         s += "*";
//         j++
//     }
//     s += "\n";
//     i++
// }
// console.log(s);


// var s = "";
// for (var i = 5; i > 0; i--) {
//   for (var j = 0; j < i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s)

var s = "";
var i = "5";
while(i > 0){
    var j = "0";
    while(j < i) {
        s += "*";
        j++
    }
    s += "\n";
    i--
}
console.log(s);

