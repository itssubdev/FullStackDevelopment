// Default Parameter
function Details(name = "Ram", age = "20"){
  return `${name} and ${age}`
}

console.log(Details("Shishir", 27));
console.log(Details());
console.log(Details("shyam"));

// .length()
// (...) Rest Parameter
function Numbers(a, ...abc){
  console.log(a);
  console.log(abc);
}
Numbers(1,2,3,4,5,6,7);

// wap to print the sun of all the number in a Array
function Numbers(...abc){
  let total = 0;
  for(let i = 0; i<abc.length; i++){
    total += abc[i]
  }
  console.log(total);
}
Numbers(10,20);

// Destructuring 
function abcd({a,b,c}){
  console.log(a,b,c);
}
abcd({a:10, b:20, c:30})

// Named Parameter
function Names(age, name){
  console.log(`my name is ${name} and age is ${age}`);
}

Names(age = 30, name = "Shishir")
Names("hari", 20)

// *
// **
// ***
// ****
// *****

// *****
// ****
// ***
// **
// *

// Arrow Function 
function abc(a, b){
  return a+b
}
console.log(abc(2,2));

abc = (a,b) => a+b;
console.log(abc(2,2));

abc = (a,b) => {
  return  a+b
};
console.log(abc(2,2));

// Anonormous function
abc = function (a,b){
  console.log(a+b);
}
abc(2,3)

// recursion
// function hello(){
//   console.log("hello");
//   return hello()
// }
// console.log(hello());

function fac(n){
  if( n ==0 || n == 1 ){
    return 1
  }else {
    return n * fac(n-1)
  }

}
console.log(fac(5));



