// object
// object -> a collection of key value pair 
obj = {
  "name":"Shishir",
  "age":27,
  "gender":"male",
  "isTeacher": true
}
console.log(obj);

console.log(obj.name);
console.log(obj.age);
console.log(obj.gender);
console.log(obj.isTeacher);

// Set -> Unique collection of value
abc = new Set()
abc.add(1)
abc.add(1)
abc.add(1)
abc.add(2)
abc.add(4)
abc.add(3)

console.log(abc);

// remove single element
abc.delete(1)
console.log(abc);
// remove all element
abc.clear()
console.log(abc);

// filter in arrays
abcd = [1,2,3,4,5,6,7]
ab = abcd.filter((items)=>{
  if (items %2 ==0){
    return items
  }
})
console.log(ab);

// Es6 modules
// let and const
let a = 10;
a = 40;
const b = 30;
console.log(a,b);

// Arrow function
ar = (a,b) => {
  console.log(a+b);
}
ar(2,2)
// class -> OOP -> Programming paradishm -> real life eample class and object 
// class , object 
// class -> it is a blueprint
// object -> instance of a class
// 4 pillars -> inheritance , encapsulation, polymorphishm, abstraction

class Student{
  // methods -> a function shich is written  inside a class
  // properties / attributes  -> variable 
  // constuctior -> a special function run when object is make 

  // name = "shishri"
  // age = "27"

  constructor(name, age){
    this.fullname = name
    this.age = age
    console.log("it runs automatically");
  }

  // methods 
  greet(){
    console.log(`hi ${this.fullname} and his age is ${this.age}`);
  }

}
obj1 = new Student("shishir", 27) // it is a object obj1
// console.log(obj1.name);
// console.log(obj1.age);
obj1.greet()
obj2 = new Student("ram", 20)
obj2.greet()
// default paramenter
function defa(a = 10, b = 20){
  return a+b
}
console.log(defa());
console.log(defa(20, 50));
// rest operators
function abf(...rest){
  console.log(rest);
}
abf(1,2,3,4,5,6)
// Spread Parameter  ...
arr1 = [1,2,3,4,5]
arr2 = [6,7,8,9,0]
arr3 = [...arr1,...arr2, 10]
console.log(arr3);

// sumbols
let smb = Symbol(1)

