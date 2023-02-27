// Manipulasi array

// 1. Menambah isi array
// var arr = [];
// arr [0] = "Izzati";
// arr [1] = "Shafa";
// arr [2] = "Dinda";
// arr [6] = "Putri";

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Izzati", "Shafa", "Dinda"];
// arr [1] = undifined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Izzati", "Shafa", "Dinda"];

// for(var i = 0; i < arr.length; i++ ){
//    console.log('mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
//}



// Method pada array
// var arr = ["Izzati", "Shafa", "Dinda"];
// 1. Join
 
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push ('Putri', 'Indah');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift('Putri');
// arr.shift();
// console.log(arr.join(' - '));


// 4. splice 
// splice (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,...)
// arr splice( 2, 0, 'Putri', 'Indah');
// console.log(arr.join(' - '));


// 5. slice
// slice (awal, akhir)
// var arr = [0,1,2,3,4];
// var arr2 = arr.slice (0);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 6. forEach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ['Izzati', 'Shafa', 'Dinda'];
// for( var i = 0; i < angka.length; i++ ) {
// console.log
// }

// angka.forEach (function(e) {
//    console.log(e);
// });

// nama.forEach (function(e, i)) {
//    console.log('Mahasiswa ke-' + (i+1) + 'adalah' : ' + e );
//    )}

// 7. Map
// var angka = [1,2,10,5,20,3,6,8,4];
// var angka2 = angka.map (function(e) {
//   return e * 2 ;
// });
// console.log(angka2.join(' - '));

// 8. Short
// var angka = [1,2,10,5,20,3,6,8,4];
// angka.short (function (a,b) {
//    return a-b;
//  });
// console.log(angka.join(' - '));

// 9. filter & find
// var angka = [1,2,10,5,20,3,6,8,4];
// var angka2 = angka.find (function (x) {
//     return x>5;
// });
// console.log(angka2);

var mhs = ['izzati', 'shafa', 'dinda', [1, 2, 3]];
console.log(mhs[1],mhs[2]);
console.log(mhs[3][1]);







