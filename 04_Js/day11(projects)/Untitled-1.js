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


