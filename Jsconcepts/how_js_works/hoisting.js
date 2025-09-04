//? Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

//todo When a function declaration is hoisted, its entire definition (including the body) is moved to the top of its containing scope during the creation phase. This means that you can call the function before it's actually declared in the code, and it will still work as expected.
// only work for var because it is global scope where let and const are block scope... hoisting define variable without initializing its value ...if we console.log var at the top then it will give undefined because space se allocated but not initilize its value
// run on console because editor strict the rules
console.log(myVar);
greet();

var myVar = 10;
function greet(){
  console.log("Welcome, If you are reading this, Don't forget you are awesome");
};

// console.log(myVar);
// greet();
