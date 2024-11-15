let score = "33abc"
//Two ways of knowing type of a variable
/*1. Use typeof as keyword */
console.log(typeof score)
/*2. Use typeof as function that takes arg as variable*/
console.log(typeof(score))

/* Output : number 
            number */

/**
  The Number() : method in JavaScript is a global function that converts a given value to a number. It can handle strings, booleans, null, and other data types, producing a numeric value. If the conversion fails, it returns NaN (Not-a-Number).
  
  Syntax : Number(value)

  
  Eg: let score = "33", now score is a string
   let valueInNumber = Number(score) 
  console.log(valueInNumber)
  this return numeric value
  
  Eg: let score = "33abc", now score is a string
  let valueInNumber = Number(score) //fails to do so 
  console.log(valueInNumber) 
  this return Nan 
 */


let valueInNumber = Number(score) 
console.log(typeof valueInNumber)
console.log(valueInNumber)

// Case : 2 , null
let num1 = null
console.log(typeof num1)
console.log(num1)

let num2 = true
console.log(typeof num2)

let num3 = undefined
console.log(typeof num3)

//Results after variables converting to Number
//"33" => 33
//"33abc" => Nan
//"true" => 1, "false" => 0

//other methods 
// Boolan(variable)
//String(variale)


//Boolean Demonstration
let isLoggedIn1 = 1
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)
//op = true

let isLoggedIn2 = 0
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)
//op = true
let isLoggedIn3 = ""
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3)
//op = false
let isLoggedIn4 = "hitesh"
let booleanIsLoggedIn4 = Boolean(isLoggedIn4)
console.log(booleanIsLoggedIn4)
//op = true

//Results after variables converting to Boolean
//1 => true
//0 => false
//"" => false
//"hitesh" => true

//String() Demonstration
let someNum = 3
let StringNum = String(someNum)
console.log(typeof StringNum)
console.log(StringNum)