// 1. persegi
// let s = "";

// for( let x = 0; x < 5; x++) {
//     for ( let y = 0; y < 5; y++) {
//         s += "*";
//     }
//     s += "\n";
// }
// console.log(s);

// function kotak(tinggi, lebar) {
//   let s = "";
//   for( let x = 0; x < tinggi; x++) {
//     for ( let y = 0; y < lebar; y++) {
//         s += "*";
//     }
//     s += "\n";
//   }
//   return s;
// }
// console.log(kotak(5, 5));


// 2. segitiga 1
// var s = "";

// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j <= i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// function segitiga(panjang) {
//     var s = '';
//     for (var i = 0; i < panjang; i++) {
//         for (var j = 0; j <= i; j++) {
//             s += '*';
//         }
//         s += '\n';
//     }
//     return s;
// }
// console.log(segitiga(10));

// 3. segitiga 2
// var s = '';
// for (var i = 0; i < 10; i++) {
//     for (var j = 10; j > i; j--) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

// function segitiga2(panjang) {
//     var s = '';
//     for (var i = 0; i < panjang; i++) {
//         for (var j = panjang; j > i; j--) {
//             s += '*';
//         }
//         s += '\n';
//     }
//     return s;
// }
// console.log(segitiga2(10));


// 4. segitiga 3
// var s = '';
//     for (var i = 10; i > 0; i--) {
//         for (var j = 1; j <= 10; j++) {
//             if (j >= i) {
//                 s += '*';
//             } else {
//                 s += ' '
//             }
//         }
//         s += '\n';
//     }
//     console.log(s);

function segitiga3(panjang) {
    var s = '';
    for (var i = panjang; i > 0; i--) {
        for (var j = 1; j <= panjang; j++) {
            if (j >= i) {
                s += '*';
            } else {
                s += ' '
            }
        }
        s += '\n';
    }
    return s;
}
console.log(segitiga3(10));












































// var s = "";
// for (var i = 0; i < 10; i++) {
//       for (var j = 0; j <= i; j++) {
//         s += "*";
//       }
//       s += "\n";
//     }
//     console.log(s);

// var s = ``;
// for (var i = 5; i > 0; i--) {
//   for (var j = 0; j <= 5; j++) {
//     if (j >= i) {
//     s += `(${i},${j})`;
//     //   s += "* ";
//     } else {
//       s += ` `;
//     }
//   }
//   s += `\n`;
// }
// console.log(s);