//for(j = 0; j < 5; j++)
//console.log(j);
 
// var s = "";

// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j <= i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);


// var s = "";

// for (var i = 5; i > 0; i--) {
//   for (var j = 0; j < i; j++) {
//     if (i >= j) {
//       s += "* ";
//     } else {
//       s += " ";
//     }
//   }
//   s += "\n";
// }
// console.log(s);

// var s = "";
// for (i = 5; i > 0; i--) {
//   for (j = 0; j <= 5; j++) {
//     if (j >= i) {
//       s += "* ";
//     } else {
//       s += " ";
//     }
//   }
//   s += "\n";
// }
// console.log(s);

// var s = "";
// for (i = 5; i > 0; i--) {
//   console.log(i);
//   for (j = 0; j <= 5; j++) {
//     console.log(j);
//     if (j >= i) {
//       s += "#";
//     } else {
//       s += "-";
//     }
//     console.log(s);
//   }
//   s += "\n";
// }
// console.log(s);

// var s = "";
// for (i = 5; i > 0; i--) {
//   console.log(i);
//   for (j = 5; j > 0; j--) {
//     console.log(j);
//     if (j <= i) {
//       s += "*";
//     } else {
//       s += "-";
//     }
//     console.log(s);
//   }
//   console.log('loop j berhenti')
//   s += "\n";
// }
// console.log(s);

// var s = "";

// for (var i = 1; i < 5; i++) {
//   console.log('i ',i);
//   for (var j = 1; j <= i; j++) {
//     console.log('j ',j);
//     s += "*";
//     console.log(s);
//   }
//   console.log('loop j berhenti')
//   s += "\n";
// }
// console.log(s);


var s = "";
for (var i = 5; i > 0; i--) {
  console.log('i ',i);
  for (var j = 0; j < i; j += 2 ) {
    console.log('j ',j);
    s += "*";
    console.log(s);
  }
  console.log('loop j berhenti')
  s += "\n";
  console.log(s);
}
console.log(s)


// var s = "";
// for (var i = 0; i < 6; i++) {
//   console.log('i ',i, ' ', i % 2);
//   if (i % 2 == 0) {
//     console.log('true');
//     for (var j = 0; j < 6; j++) {
//       console.log('j1 ',j, ' ', j % 2);
//       if (j % 2 == 0) {
//         s += "#";
//       } else {
//         s += " ";
//       }
//     }
//     console.log('loop j1 berhenti')
//     s += "\n";
//   } else {
//     console.log('false');
//     for (var j = 0; j < 6; j++) {
//       console.log('j2 ',j, ' ', j % 2);
//       if (j % 2 == 0) {
//         s += " ";
//       } else {
//         s += "#";
//       }
//     }
//     console.log('loop j2 berhenti')
//     s += "\n";
//   }
// }

// console.log(s);










































// var s = "";
// for (var i = 0; i < 6; i++) {
//   if (i % 2 == 0) {
//     for (var j = 0; j < 6; j++) {
//       if (j % 2 == 0) {
//         s += "#";
//       } else {
//         s += " ";
//       }
//     }
//     s += "\n";
//   } else {
//     for (var j = 0; j < 6; j++) {
//       if (j % 2 == 0) {
//         s += " ";
//       } else {
//         s += "#";
//       }
//     }
//     s += "\n";
//   }
// }

// console.log(s):