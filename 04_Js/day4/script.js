// Function -> A block of code runs when it is called
// Function -> 2 types of function 
// 1. InBuild Function -> console.log(), alert(), prompt(), confirm(), print()
// 2. Custom Function -> user defined function
//  function FunctionName(parameters){
    //body
// }

function abc(){
    console.log("Hello my name is Shishir Bhandari and age is 27");
}
abc();
abc();
  
function abcd(){
    console.log("bye");
    return `My name is Shishir Bhandari and age is 27 ok`;
}
console.log(abcd());
console.log(abcd());

// Parameters in function
function abcde(names , age){
    return `My name is ${names} and age is ${age} ok`
}
console.log(abcde("shishir", 27));
console.log(abcde("aashra", 17));
console.log(abcde("juntip", 16));
//wap to print the name of the instititue ,location ,your name
function abcdef(name, institute, location){
    console.log(`My name is ${name} and i study in ${institute} in ${location} ok`);
}
abcdef("shishir", "Dursikshya", "Nepal");

// Function with no parameter and no return type 
abc();
// Function with parameter and no return type 
abcdef();
// Function with no parameter but with return type 
abcd();
// Function with parameter also with return type 
abcde();

// Parameters type in function
// 1. Positional Parameter
function abcdef(name, institute, location){
    console.log(`My name is ${name} and i study in ${institute} in ${location} ok`);
}
abcdef("shishir", "Dursikshya", "Nepal");
// 2. Named Parameter
function details({names, age}){
    console.log(`My name is ${names} and age is ${age} ok`);
}
details({age : 27, names : "shishir"});

// 3. Default Parameter
