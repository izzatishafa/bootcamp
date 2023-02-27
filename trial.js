//var text ="ABCDEFGHIJ";
//alert(text.length);

// pass-by-value (primitive)
// var nama1 = "Ahmad";
// var nama2 = "Ahmad";
// console.log(nama1 === nama2);

//pass-by-reference (object & array)
// var obj1 = {nama : "cangkir"}
// var obj2 = {nama : "cangkir"}

// var obj3 = {nama : "sabun"}
// var obj4 = obj3
// obj3.harga = 3000;
// obj4.jumlah = 2;
// console.log(obj3,obj4);

var myStr = `she said "Whoever is happy, will make others happy too."`
//console.log(myStr);

// var a = 'this is the first sentence, '
// a += 'this is the second sentence.'

// console.log(a);

// var myName = 'izzati';
// var str = 'My Name Is '+ myName + ', how are you?';
// console.log(str);

// var fisrtNameLength = 0;
// var firstName = 'shafa';
// firstNameLength = firstName.length;
// console.log(firstName.length);

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "the " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
    return result;

}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));