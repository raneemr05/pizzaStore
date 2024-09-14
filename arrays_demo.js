// An array storing random values of different data types
let randomValues = ['A', 55, false, "Javascript"];
console.log(randomValues);

// // Display length using the length property
// console.log(randomValues.length);

// // Accessing the index/position at 1
// console.log(randomValues[1]);

// // Access the whole array using index number individually
// console.log(randomValues[0]);
// console.log(randomValues[1]);
// console.log(randomValues[2]);
// console.log(randomValues[3]);

// console.log("---- Using FOR loop ---- ")
// // Using loop as a better option to iterate arrays instead of index numbers
// for(let index=0; index<randomValues.length; index++){
//     console.log(randomValues[index]);
// }
// console.log("---- Using FOR EACH loop ---- ")
// // Using for-each loop to access arrays
// randomValues.forEach(element => console.log(element));

// Adding elements in the array

// 1. Use push to insert element at the end
randomValues.push("programming");
console.log(randomValues);

// 2. Use unshift to insert element at the begining
randomValues.unshift(100);
console.log(randomValues);

// Remove elements in the array
// 1. Using pop to remove the last element
randomValues.pop();
console.log(randomValues);

// 2. Using shift to remove the 1st element/beginning
randomValues.shift();
console.log(randomValues);

// Use splice to insert element at a specific position
randomValues.splice(2,1,"Coffee");
console.log(randomValues);