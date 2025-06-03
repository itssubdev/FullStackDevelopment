// Dates 
let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
let abc = date.getDay();
let days = document.getElementById("day");
switch(abc){
    case 0:
        days.innerHTML = "Sunday";
        break;
    case 1:
        days.innerHTML = "Monday";
        break;
    case 2:
        days.innerHTML = "Tuesday";
        break;
    case 3:
        days.innerHTML = "Wednesday";
        break;
    case 4:
        days.innerHTML = "Thursday";
        break;
    case 5:
        days.innerHTML = "Friday";
        break;
    case 6:
        days.innerHTML = "Saturday";
        break;
    default:
        days.innerHTML = "none of the above";
}
switch(abc){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("none of the above");
}
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

// ISO 8601 -> YYYY-MM-DDTHH:mm:ss.sss
console.log(date.toISOString());
console.log(date.toLocaleDateString());

// scope -> varibles and function
// global Scope
let a = 20
function Global(){
  console.log(a);
  a = 30
  console.log(a);
}
Global()
console.log(a);
// local scope
function local(){
  let b = 20
  console.log(b);
  b = 30
  console.log(b);
}
local()
// console.log(b);
// hoaisting
console.log("abcf",abcf);
// console.log("ab",ab);
let ab = 10
var abcf = 40
console.log("ab",ab);
console.log("abcf",abcf);

// Prompt -> data -> String Format 
// wap that ask input from the user and print the value
names = prompt("Enter your full name")
document.getElementById("namess").innerHTML = names

// wap that ask input from the user and add the
//  2 values 
first_value = Number(prompt("Enter your 1st name"))
second_value = Number(prompt("Enter your 2nd name"))
console.log(first_value+second_value);


