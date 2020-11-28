//Random Function Math.floor(Math.random() * 10); to get Single Digit.
let random1 = Math.floor(Math.random() * 10);
console.log("Random Single digit number is:" + random1);

//Use Random to get Dice Number between 1 to 6
let random2 = Math.floor(Math.random() * 10) % 6 + 1;
console.log("Dice number between 1 to 6: " + random2);

//Add two Random Dice Number and Print the Result
let dice1 = Math.floor(Math.random() * 10) % 6 + 1;
let dice2 = Math.floor(Math.random() * 10) % 6 + 1;
let result = dice1 + dice2;
console.log("Addition of two random dice numbers "+ dice1 +"+"+ dice2+ "=" + result);

//Write a program that reads 5 Random 2 Digit values ,then find their sum and the average
let sum = 0;
for (i = 0; i<5; i++) {
let number = Math.floor(Math.random() * 90) + 10;
 sum += number;
}
let average = sum/5;
console.log("The sum of  5 Random 2 Digit values is : "+ sum);
console.log("The average of  5 Random 2 Digit values is : "+ average);

//Unit Conversion
//a. 1ft = 12 in then 42 in = ? ft
let ft = 12;
let res = 42/ft;
console.log("42 inch = "+result+" feet");

//b. Rectangular Plot of 60 feet x 40 feet in meters
let feet = 60 * 40;
let meter = 0.305;
let res1 = (feet * meter);
console.log("60 feet x 40 feet = "+res1+" sq. meters");

//c. Calculate area of 25 such plots in acres
let acre = (25 * res1)/4046.8;
console.log("area of 25 such plots = "+acre+" acres");

