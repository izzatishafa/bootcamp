//Membuat object
//object literal
var mhs1 = {
    nama : 'Izzati Shafa',
    nrp : '0059258370',
    email : 'izzatishafa2@gmail.com',
    jurusan : 'Teknik Informatika'
}

var mhs2 = {
    nama : 'Lusiana Putri',
    nrp : '938648206542',
    email : 'lusianaptr@gmail.com',
    jurusan : 'Teknik industri'
}

//Function Declaration
function buatObjectMahasiswa (nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
return mhs; 
}

var mhs3 = buatObjectMahasiswa ('Dinda Raihana', '02932742856',
 'dindaa@yahoo.com', 'Psikologi');

//constructor
function Mahasiswa (nama, nrp, email,
    jurusan){
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa ('Fatimah Azzahra', '0808342868',
 'fatimahazzahra@gmail.com', 'Pendidikan islam');
