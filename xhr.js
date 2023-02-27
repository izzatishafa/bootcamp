// function reqListener() {
//     console.log(this.responseText);
//   }
  
//   const req = new XMLHttpRequest();
//   req.addEventListener("load", reqListener);
//   req.open("GET", "https://dummyjson.com/products/1");
//   req.send();
//   console.log('abc');


const quotes = fetch('https://dummyjson.com/products/1');
console.log(quotes);

