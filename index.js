// FUNCTION 1: Welcomer
// Define a function called greeting that takes a name as a parameter and console logs "Hello " + name
function greetings(name){
  console.log("Hello "+ name)
}
// Call the greeting function with your name as the argument
greetings("marlon")

// Prompt the user to enter their name
let user = prompt("enter your name")

// Call the greeting function and pass in the user's name as an argument.
greetings(user)


// -------------------------------------------------
// FUNCTION 2: Adder
// Define a function called add that takes two numbers as parameters and returns the sum
function Add(num1,num2){
  return num1+num2
}




// Call the add function and pass in any two numbers to test. Console log it (either directly or through a variable)! 
Add(3,6)
let sum = Add(3,6)
console.log(sum)
// Prompt the user to enter one number
let user2 = prompt("enter a number")
user2 = parseInt(user2)
// Prompt the user to enter another number
let user3 = prompt("enter another number")
user3 = parseInt(user3)
// Call the add function and pass in the user's numbers.
Add(user2,user3)
// Console log it (either directly or through a variable)! 
 let sum2 = Add(user2,user3)
  console.log(sum2)


// Notice how the value that printed just put the numbers next to each other instead of adding them. That's because they're both strings!
// Use parseInt() on both of the user's numbers to make them into numbers (you can re-assign existing variables or declare new ones)



// Call the add function with the parsed number values from the user. Console log it and check that the math works correctly!







// -------------------------------------------------
// FUNCTION 3: Calculator (Extra Credit)
// Define a function called takes in 3 parameters: operation, number1, and number2
// The function should use if/else if/else statements on the operation parameter to perform the correct calculation on the two numbers
// You should support "add", "subtract", "multiple", and "divide" operations

function calculator (operation, num1, num2){
  if (operation = "multiplication"){
    console.log(num1 * num2)
  }else if(operation = "division"){
  console.log(num1/num2)  
  }else if(operation = addition){
    console.log(num1 + num2)
  }else if(operation = "subtraction"){
    console.log(num1 - num2)
  }
}
calculator(operation,num1,num2)

// Test it out with at least 2 different functions calls












