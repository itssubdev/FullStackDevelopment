// promises -> async await -> it make code Work Asyncronously
console.log("Hello");
let promises = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("shishir");
  }, 5000);
})
promises.then((value) => {
  console.log(value);
})
console.log("bye shishir");
// async and await
let url = "https://fakestoreapi.com/products"; 
// fetch
let data = async() =>{
    try{
        let info = await fetch(url);
        let lastdata = await info.json();
        console.log(lastdata);
    }
    catch(e){
        console.log(e.message);
    }
}
data();
console.log("bye");


