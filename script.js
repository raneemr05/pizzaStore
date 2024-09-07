
/*

// // Displaying a message
// // 1. Using alert
// // alert("Hi I am in alert box you will see me in a pop up window");
// // 2. Using prompt
// // prompt("Do you want to continue?");
// // 3. Using console.log -> good for debugging
// // console.log("I am a message but I am hidden");
// // -----------------------------------------------------------

// // Declared and assigned a variable 
// let ownerName = 'Traci Meusen';
// console.log(ownerName[0]); // T
// console.log(ownerName.charAt(2)); // a
// console.log(ownerName.indexOf('M')); //6

// // // Concatenating the string with a variable using + or ,
// // console.log("Owner's name is \n " + ownerName);

// // console.log("The length of the owner name is: " + ownerName.length);
// // // toLowerCase, to UpperCase, charAt()

// // console.log(ownerName + 2); // + is acting as a concatenation operator
// // console.log(ownerName - 2); // NaN because ownerName is string

// // // Create a variable to store FoundedYear and display it
// // // It was founded in ____ year
// // let foundedYear; //declared a variable 
// // console.log(foundedYear); // undefined 
// // foundedYear = 2005; //assigned a value
// // //Arithmetic Assignment Operator ( +=, -=, *=, /=, %=)
// // foundedYear += 5  // foundedYear = foundedYear + 5;

// // console.log(foundedYear);
// // // or let foundedYeat = 2005
// // console.log("It was founded in " + foundedYear + " year")
// // //foundedYear = "2005";
// // console.log(foundedYear + 5) // + is doing the calculation

// // //Boolean - true or false
// let isOpen = true;
// console.log("The pizze store is open: " + isOpen);

// isOpen = false;
// console.log("The pizze store is open: " + isOpen)

// // // A constant value - unchangeable 
// const openingHours = "07:00 - 18:00"
// console.log("The opening hours are: " + openingHours);

// // openingHours = "07:00 - 15:00";
// // console.log("The opening hours are: " + openingHours);

// // // typeof Operator 
// console.log("The data type of opening hours is: " + typeof(openingHours));
// console.log("The data type of isOpen is: " + typeof(isOpen));
// console.log("The data type of founded Year is: " + typeof(foundedYear));
// console.log("The data type of owner name is: " + typeof(ownerName));

// // Type Conversion 
// // String to Int --> "5" convert it to 5
// // parseInt(myNumber)
// // Convert a value to a string --> toString()
*/
// // ------- Conditionals --------

/*
// 1. Usage if and if-else
let isOpen = true;  // --> Change this true to false then check the result
let isDeliveryAvailable = true;

// Use if statement to print the store opening message
if (isOpen === true && isDeliveryAvailable === true){
    console.log("The store is open and delivery is available");
    console.log("You are welcome to visit us or order online!");
}
else{
    console.log("The store is closed");
}
*/

// 2. Usage if elseif and else
// Try these with 3 city names, one city same as if statement 
// other city same as in else if 
// let deliveryLocation = "London"; // Change the location to some other city

// if(deliveryLocation === "London")
// {
//     console.log("Delivery is available to London. Feel free to place your order");
// }
// else if(deliveryLocation ==="Leeds"){
//     console.log("Delivery is available to Leeds")
// }
// else{
//     console.log("Sorry we don't deliver to your area");
// }


// let pizzaSize="small";
// if(pizzaSize==="small"){
//     console.log("4 bucks")
// }
// else if(pizzaSize==="medium"){
//     console.log("6 bucks")
// }
// else if(pizzaSize==="large"){
//     console.log("8 bucks")
// }
// else if(pizzaSize === "Special"){
//     console.log("12bucks");
// }
// else{
//     console.log("Invalid pizza size")
// }


// --- SWITCH CASE EXAMPLE ----
// Checking the pizza size and price using switch case
// I want to get the input from user --> Which pizza size you want to order?
//let pizzaSize="Small"; // hard-code value --> instead you use prompt to make it dynamic
let pizzaSize = prompt("Which size do you want to order?").toLowerCase(); // Take the input of size from user
switch(pizzaSize){
    case "small":
        console.log("The price of small pizza is $4");
        break;

    case "medium":
        console.log("The price of medium pizza is $8");
        break;

    case "large":
        console.log("The price of large pizza is $10");
        break;

    default:
        console.log("Invalid size! Please choose the correct size");
}


