// An array storing random values of different data types
// let randomValues = ['A', 55, false, "Javascript"];
// console.log(randomValues);

// // Update the value of an element using index number / position
// randomValues[2] = true;
// console.log("After Changing the value at index 2: " + randomValues);

// // // Display length using the length property
// // console.log(randomValues.length);

// // // Accessing the index/position at 1
// // console.log(randomValues[1]);

// // // Access the whole array using index number individually
// // console.log(randomValues[0]);
// // console.log(randomValues[1]);
// // console.log(randomValues[2]);
// // console.log(randomValues[3]);

// // console.log("---- Using FOR loop ---- ")
// // // Using loop as a better option to iterate arrays instead of index numbers
// // for(let index=0; index<randomValues.length; index++){
// //     console.log(randomValues[index]);
// // }
// // console.log("---- Using FOR EACH loop ---- ")
// // // Using for-each loop to access arrays
// // randomValues.forEach(element => console.log(element));

// // Adding elements in the array

// // 1. Use push to insert element at the end
// randomValues.push("programming");
// console.log(randomValues);

// // 2. Use unshift to insert element at the begining
// randomValues.unshift(100);
// console.log(randomValues);

// // Remove elements in the array
// // 1. Using pop to remove the last element
// randomValues.pop();
// console.log(randomValues);

// // 2. Using shift to remove the 1st element/beginning
// randomValues.shift();
// console.log(randomValues);

// // Use splice to insert element at a specific position
// randomValues.splice(2,1,"Coffee");
// console.log(randomValues);

// // Check index value of an element 
// // returns the index number if the element exist or -1 if it doesn't exist
// console.log(randomValues.indexOf("Javascript"));

// //includes
// console.log(randomValues.includes('Javascript'));

// //using includes in conditional
// if(randomValues.includes('Java')){
//     console.log("Javascript is in the list");
// }
// else{
//     console.log("No such element exist");
// }

// let fruits = ['🍓','🍌','🥝'];
// alert(fruits);

// let toppings =['olives','cheese', 'pepperoni','mushroom','salami'];
// console.log("Sorted list of toppings");
// console.log(toppings.sort());

// toppings.reverse();
// console.log("Reversed list of toppings");
// console.log(toppings);

// Numeric Array
// let prices = [15, 10, 8, 2, 150]; // Increase the price by 2
// // In sort, write a compare function as a parameter 
// let sortedArray = prices.sort((a, b) => a - b);
// console.log(sortedArray); // ASCENDING
// console.log(prices.sort((a, b) => b - a)); // DESCENDING


// let priceList = [15, 
//     10, 
//     8, 
//     2, 
//     150, 
//     toppings, 
//     {'price': 20, 'calories': 200}
// ]; 
// console.log(priceList);


// // MAP, FILTER AND REDUCE
// // Increase the price by 2 using MAP 
// let newPrices = priceList.map(price => price + 2 );
// console.log("The Latest Price: ")
// console.log(newPrices.sort((a,b) => a - b));
// console.log("The Original Price: " + priceList);
// // console.log(priceList);

// // Using filter() 
// // Filter the toppings which has price > 15
// let expensiveToppings = priceList.filter(price => price >= 15);
// console.log("Toppings which are > 15");
// console.log(expensiveToppings);


// // Using reduce()
// // Calculate the total cost of all toppings 
// let totalCost = priceList.reduce((total, price) => total + price, 0);
// console.log(totalCost);




const toppingList = [
    {topppings: 'Olives', price: 3, calories: 23},
    {topppings: 'Mushrooms', price: 6, calories: 23},
    {topppings: 'Chicken', price: 7, calories: 23}
]
console.log(toppingList);

// toppingList.forEach(element => console.log(element));

//using map method to see the toppings name only
// const toppingNames = toppingList.map(topping => topping.topppings);
// console.log(toppingNames);


// Using map to update the price (e.g. increase each price by 1)
const updatedPrice = toppingList.map(mytopping => {
    return{
        ...mytopping, //... spread operator,  used to keep all other properties the same
        price: mytopping.price + 2 //  Increasing the price by 1
    };
});
console.log(updatedPrice);