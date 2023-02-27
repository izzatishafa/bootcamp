// let mahasiswa = {
//     nama : "Izzati Shafa",
//     nrp : "098646289",
//     email : "izzatishafa2@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa));

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200 ) {
        let mahasiswa = this.responseText;
        console.log(mahasiswa);
    }
}
// xhr.open('GET', 'coba.json', true);
xhr.open('GET', 'https://yesno.wtf/api', true);
xhr.send();

