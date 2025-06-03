// arrays methods and arrays iterations
// what is arrays-> collection of elements which are stored in contiguous memory location
// arrays are used to store multiple values in a single variable
let a = 10
let b = 20
let c = 30
let d = 40
let e = 50
console.log(a,b,c,d,e);
console.log(a);

let arr = [10,20,30,40,50]
console.log(arr);
console.log(arr[0]);
console.log(arr[4]);
console.log(arr[2]);
console.log(arr.length);
// print arrays using for loop
for(let i = 0; i< arr.length; i++){
    console.log(arr[i]);
}
// wap to print the sum of above arrays data h/w = 150 for 

// Methods in arrays -> push ,pop, shift, unshift
arri = [1,2,3]
console.log(arri);
// pop -> removes the last elements form that arrays
arri.pop()
console.log(arri);
// push -> add the element from the last
arri.push(3)
console.log(arri);
// shift
arri.shift()
console.log(arri);
// unshift
arri.unshift(0)
console.log(arri);
// revers 
arri.reverse()
console.log(arri);
// splice
arri.splice(0,2,1,2,3,4,5)
console.log(arri);
// sort
arri.sort()
console.log(arri);

arrays = [1,2,3,4,5,6]
arrays.splice(0, 3, 3.3, 3.4, 3.5)
console.log(arrays);

// wap to rever a string h/w
// wap to print if the giver string is palindrome
// wap to print if the given number is prime or not using arrows function

// Arrays interation -> for 
// 1. for loops 
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
// 2.for of -> it print every element without the index
for (let i of arr){
    console.log(i);
}
// 3. forEach -> for each works with a callback function it goes inside an array and print each element i
arr.forEach((i) => {
  console.log(i);
});

// 4. map 
let onetwo = arr.map((i, index)=> {
  console.log(index);
  return i*2
})
console.log(onetwo);

// 5. filters it also returns the new array which satisfied the condition 
arr.filter((i)=>{
    return i%2==0
})

