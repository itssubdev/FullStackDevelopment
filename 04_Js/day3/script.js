console.log("hello world");
// Conditions in Js 
// if,  else , elseif, switch
// if(consition){ 
//  body
// }
// wap to check if a given user can drive or not 
age = 17
if(age >= 18){
  console.log("he or she can drive");
}else{
  console.log("he or she cannot dirve");
}
//  wap to check if a user is above 60 then print "eligible"
age = 8
if(age >= 65){
  console.log("eligible");
}else{
  console.log("not eligible");
}
// wap to check what day is today
day = "abc";
if(day == "Sunday"){
  console.log("Today is Sunday");
}
else if(day=="Monday"){
  console.log("Today is Monday");
}
else if(day=="Tuesday"){
  console.log("Today is Monday");
}
else if(day=="Wednesday"){
  console.log("Today is Wednesday");
}
else if(day=="Saturday"){
  console.log("Today is Saturday");
}
else{
  console.log("none of the above");
}
// wap to check what grade is 70 if B+ (and)
marks = 60;
if(marks>=90){
  console.log("A+");
}
else if(marks>=80 && marks <90){
  console.log("A");
}
else if(marks>=70 && marks <80){
  console.log("B+");
}
else if(marks>=60 && marks <70){
  console.log("B");
}
else if(marks>=50 && marks <60){
  console.log("C+");
}
else if(marks>=40 && marks <50){
  console.log("C");
}
else{
  console.log("failed");
}
//  wap to check if the given number is odd or even
numbers = 21;
if(numbers%2==0){
  console.log("ITs even number");
}else{
  console.log("odd number");
}

// Switch in js -> case 
day = "abcd"
switch(day){
  case "sunday":
    console.log("its sunday");
    break;
  
  case "monday":
    console.log("its monday");
    break;
  
  default:
    console.log("none of the above");
}
// loops 
console.log("shihir bhandari");
// for , while, do while 
// breaking statement  -> break , continue
for (let i = 0; i<=100; i++){
  console.log(i);
}
// for(initialization, conditions, inc/dec){
  // body
// }
let i = 0
while (i<=100){
  console.log(i);
  i++;
}
// while (condition){
//  inc/dec
// }
// i=0
console.log(i);
// do while loops 
// do {
  // inc/dec
// }while(condition)
do{
  console.log(i);
  i++;
}while(i<=100)
// wap to check using for loops to printall the even number between 0 to 100

