// var a = 8;
// var b = 5;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

// console.log(total);


// Menggunakan function
// function jumlahVolumeDuaKubus(a, b) {
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB;

//     return total;
// }

// console.log(jumlahVolumeDuaKubus (8, 5));

// function tambah(a, b) {
//     return a + b;
// }
// var a = parseInt (prompt('masukan nilai 1 :'));
// var b = parseInt (prompt('masukan nilai 2 :'));
// var hasil = tambah(a, b);
// console.log(hasil);



// function tambah() {
//     var hasil = 0;
//     for( var i = 0; i < arguments.length; i++ ); {
//         hasil += arguments[i];
//     }
//     return hasil;
// }

// var coba = tambah(1,2,3,4);
// console.log(coba);

function universTs() {
    function dimension () {
        return "gigantic";
    }
    return dimension();
    function dimension() {
        return "enormous";
    }
}
console.log(universTs());