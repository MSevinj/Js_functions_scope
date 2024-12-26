'use strict'
// ## Functions without params
// ### **1. Display a Welcome Message**
// Write a function `welcomeMessage` that prints "Welcome to JavaScript!" to the console.
function welcomeMessage (){
    console.log('Welcome to JavaScript!');
}
welcomeMessage()


// ### **2. Generate a Random Number**
// Write a function `generateRandom` that generates and logs a random number between 0 and 100.
function generateRandom(){
    console.log(Math.random() * 100);
}
generateRandom()


// ### **3. Count to Ten**
// Write a function `countToTen` that logs the numbers from 1 to 10.
function countToTen(){
    for(let i=1; i<=10; i++)
        console.log(i);
}
countToTen()


// ### **4. Print Even Numbers**
// Write a function `printEvens` that logs even numbers from 1 to 10.
function printEvens(){
    let numbers = [1,2,3,4,5,6,7,8,9,10]
    let evenNumbers = numbers.filter(num => num % 2 ===0);
    console.log(evenNumbers)
}
printEvens()




// ## Functions with params
// ### **1. Add Two Numbers**
// Write a function `addNumbers` that takes two numbers as parameters and returns their sum.
function addNumbers (number1, number2){
    console.log(number1+number2);  
}
addNumbers (4, 5)



// ### **2. Greet Someone**
// Write a function `greet` that takes a name as a parameter and logs "Hello, [name]!".
function greet(name){
    console.log("Hello," ,name,'!');
}
greet('Peter')



// ### **3. Multiply Two Numbers**
// Write a function `multiply` that takes two numbers as parameters and returns their product.
function multiply(a, b){
    console.log (a*b);
}
multiply(5, 6)



// ### **4. Find the Larger Number**
// Write a function `findMax` that takes two numbers as parameters and returns the larger one.
function findMax (a,b){
    console.log(Math.max(a,b));
}
findMax(3, 7)


// ### **5. Calculate the Square of a Number**
// Write a function `square` that takes a number as a parameter and returns its square.
function square(a){
console.log(a*a);
}
square(5)


// ### **6. Check Voting Eligibility**
// Write a function `canVote` that takes an age as a parameter and returns `true` if the person is 18 or older, otherwise `false`
function canVote (age){
    if (age >= 18)
        console.log(true);
    else{
        console.log(false);
    }
}
canVote (20)


// ### **7. Check if a Number is Divisible by Another**
// Write a function `isDivisible` that takes two numbers as parameters and returns `true` if the first number is divisible by the second.
function isDivisible(num1, num2){
    if (num2 % num1 ===0)
        console.log(true);
    else{
        console.log(false);
    }
}
isDivisible (3, 9)


// ### **8. Find the Length of a String**
// Write a function `stringLength` that takes a string as a parameter and returns its length.
function stringLength(string){
   return string.length
}
console.log(stringLength('helloWorld'))


// ### **9. Find the Largest Number**
// Write a function `findLargest` that takes an array of numbers as a parameter and returns the largest number.
function findLargest(ary1, ary2, ary3){
console.log(Math.max(ary1, ary2, ary3));
}
findLargest([5], [7], [12])




// ## Function with array methods
// ### **1. Filter Even Numbers**
// Write a function `filterEven` that takes an array of numbers as a parameter and returns a new array with only the even numbers.
function filterEven(ary){
let evenNumbers = ary.filter(num => num % 2 ===0);
    console.log(evenNumbers)
}
filterEven([2,6,5,8,15,25])



// ### **2. Square Numbers**
// Write a function `squareNumbers` that takes an array of numbers and returns a new array with each number squared.
function squareNumbers(){
    let aryNumbers = [4,7,15]
    console.log(aryNumbers.map (num => num ** 2));
}
squareNumbers()



// ### **3. Filter Odd Numbers**
// Write a function `filterOdd` that filters out odd numbers from an array.
function filterOdd(oddnum){
    let oddNumbers = oddnum.filter(num => num % 2 !==0);
    console.log(oddNumbers);
}
filterOdd([4,6,8,16,17,19,26])



// ### **4. Sum of All Numbers**
// Write a function `sumNumbers` that takes an array of numbers and returns the sum using `reduce`.
function sumNumbers (reducedNumbers){
    console.log(reducedNumbers.reduce((total, num) => total+num, 0));
  
}
sumNumbers ([4, 5, 33, 56])



// ### **5. Sort by Length**
// Write a function `sortByLength` that sorts an array of strings by their length in ascending order.
function sortByLength (arr){
    return arr.sort((a,b) => a.length - b.length);
}
console.log(sortByLength(['apple', 'pineapple', 'orange']));
