console.log("hello world day 2 data types ");

// Variable in JS 
// var -> variable
// let -> variable
// const -> variable

var a = 10
console.log(a);
var a = 20
console.log(a);

let b= 30
console.log(b);
b= 40
console.log(b);

// 2 process of creating a variable
// initialization var a;
// declaration a = 10;

let c;
c = 50;

// Data Types in JS 
//  Primitive Data Types -> data types which are not object or array
//  consist of String, Number, Boolean, Null, Undefined, Symbol
//  Non-Primitive Data Types -> data types which are object or array
//  consist of Object, Array, Function

// String -> collection of characters -> '', "", ``
console.log('hello my name is shishir bhandari');
console.log("hello my name is shishir bhandari");
console.log(`hello my name is shishir bhandari ${c}`);

// String Concatenation -> +
names = "hari"
age = 20
console.log("my name is " + names + " and my age is " + age);
console.log(typeof(names));

// Number -> numeric value
// int and float
//  int -> whole number -> 1, 2, 3, 4, 5
//  float -> decimal number -> 1.1, 2.2, 3.3
console.log(1);
console.log(1.9);
console.log(typeof(1));
// concatenation -> +
console.log(10+"10");
console.log(10.9+10);

// Boolean -> true or false
console.log(true);
console.log(false);
console.log(typeof(true));

// Null -> empty value
let g = null;
console.log(g);
console.log(typeof(g));
// Undefined -> value is not defined
let h;
console.log(h);
console.log(typeof(h));
// Symbol -> unique value
j = 10
let sym = Symbol(1+j);
console.log(sym);
console.log(typeof(sym));


// Operators and operands 
// 5 + 5= + is a operator and (5,5) are operands
// 5-8 Types of opertaots in Js
// 1. Arithmetic operators -> +, -, *, /, %, **
console.log(5+5); //10
console.log(5-5); //0
console.log(5*5); // 25
console.log(5/5); // 1.0
console.log(7%5); // 2
console.log(5**5); //3125

// 2. Assignment operators -> =, +=, -=, *=, /=, %=
let l = 10;
l += 5;
console.log(l);
l-=5;
console.log(l);
l*=5;
console.log(l);
l/=2;
console.log(l);
l**=2;
console.log(l);
l%=5;
console.log(l);
// 3. Comparison operators -> ==, ===, !=, !==, >, <, >=, <=
console.log(5>5); // false
console.log(5<5); // false
console.log(5>=5); // true
console.log(5<=5); // true
console.log(5=="5"); // true
console.log(5==="5"); // false
console.log(5!=5); // false
console.log(5!==5); // false

// 4. Logical operators -> &&, ||, !
// && -> and
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
// || -> or
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
// ! -> not
console.log(!true); // false
console.log(!false); // true

// 5. Bitwise operators -> &, |, ~, ^, <<, >>
console.log(5&5); // 5
console.log(5|5); // 5
console.log(~5); // -6
console.log(5^5); // 0
console.log(5<<2); // 20
console.log(5>>2); // 1

// 6. Ternary operator -> condition ? true : false

// condtion check 
//  wap to check if a number is even or odd
let num = 5;
let results = num%2==0 ? "even" : "odd";
console.log(results);




