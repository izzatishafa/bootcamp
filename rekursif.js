// for( var i = 10; i >= 1; i--) {
//     console.log(i);
// }

// penggunaan fungsi rekursif
// menampilkan angka
function tampilAngka(n) {
    if( n === 0) return;
    console.log(n);
    tampilAngka(n-1)
}

tampilAngka(10);


// faktorial
// function faktorial(n) {
//     var hasil = 1;
//     for( var i = n; i > 0; i-- ) {
//         hasil *= 1;
//     }
//     return hasil;
// }

function faktorial(n) {
    if ( n === 0 ) return 1;
    return n * faktorial(n-1);
}