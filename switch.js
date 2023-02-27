var item = prompt ('masukan nama makanan / minuman : \n (cth : nasi, daging, susu, hamburger, softdrink)')
var number = +item;
console.log(typeof number);

switch (item) {
    case item % 2 == 0 :
        alert('abcde')
        break;
    case 12 :
        alert('12');
        break;
    case 'susu' :
        alert('makanan / minuman SEHAT');
        break;
    default :
        alert ('anda memasukan nama makanan / minuman yang salah!');
        break ; 
}