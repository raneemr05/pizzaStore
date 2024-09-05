// Displaying a message
// 1. Using alert
// alert("Hi I am in alert box you will see me in a pop up window");
// 2. Using prompt
// prompt("Do you want to continue?");
// 3. Using console.log -> good for debugging
// console.log("I am a message but I am hidden");
// -----------------------------------------------------------

// Declared and assigned a variable 
let ownerName = 'Traci Meusen';
console.log(ownerName[0]); // T
console.log(ownerName.charAt(2)); // a
console.log(ownerName.indexOf('M')); //6

// // Concatenating the string with a variable using + or ,
// console.log("Owner's name is \n " + ownerName);
// console.log("The length of the owner name is: " + ownerName.length);
// // toLowerCase, to UpperCase, charAt()

// console.log(ownerName + 2); // + is acting as a concatenation operator
// console.log(ownerName - 2); // NaN because ownerName is string

// // Create a variable to store FoundedYear and display it
// // It was founded in ____ year
// let foundedYear; //declared a variable 
// console.log(foundedYear); // undefined 
// foundedYear = 2005; //assigned a value
// //Arithmetic Assignment Operator ( +=, -=, *=, /=, %=)
// foundedYear += 5  // foundedYear = foundedYear + 5;

// console.log(foundedYear);
// // or let foundedYeat = 2005
// console.log("It was founded in " + foundedYear + " year")
// //foundedYear = "2005";
// console.log(foundedYear + 5) // + is doing the calculation

// //Boolean - true or false
let isOpen = true;
console.log("The pizze store is open: " + isOpen);

isOpen = false;
console.log("The pizze store is open: " + isOpen)

// // A constant value - unchangeable 
const openingHours = "07:00 - 18:00"
console.log("The opening hours are: " + openingHours);

// openingHours = "07:00 - 15:00";
// console.log("The opening hours are: " + openingHours);

// // typeof Operator 
console.log("The data type of opening hours is: " + typeof(openingHours));
console.log("The data type of isOpen is: " + typeof(isOpen));
console.log("The data type of founded Year is: " + typeof(foundedYear));
console.log("The data type of owner name is: " + typeof(ownerName));