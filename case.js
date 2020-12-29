//Read a single digit number and write the number in word using Case
let num = Math.floor(Math.random() * 10) ;
console.log("Random Single digit number is:" + num);
switch (num) {
    case 0:
        text = "zero";
        break;
    case 1:
        text = "one";
        break;
    case 2:
        text = "two";
        break;    
    case 3:
        text = "three";
        break;
    case 4:
        text = "four";
        break;
    case 5:
        text = "five";
        break;  
    case 6:
        text = "six";
        break;
    case 7:
        text = "seven";
        break;    
    case 8:
        text = "eight";
        break;
    case 9:
        text = "nine";
        break;       
}
console.log("the digit "+num+" is "+text+" in words")

//Read a Number and Display the week day (Sunday, Monday,...)
let day = Math.floor(Math.random() * 10) %7 +1 ;
console.log("Day number is:" + day);
switch (day) {
   
    case 1:
        text = "Monday";
        break;
    case 2:
        text = "tuesday";
        break;    
    case 3:
        text = "wednesday";
        break;
    case 4:
        text = "thursday";
        break; 
    case 5:
        text = "friday";
        break;
    case 6:
        text = "saturday";
        break;    
    case 7:
        text = "sunday";
        break;        
}
console.log("the day number "+num+" is "+text+" in words")

//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("enter value in unit format 1,10,100,1000 etc  : ", function (value) {
    let text = "";
    switch (value) {
        case 1:
          text = "unit";
        break;
        case 2:
          text = "ten";
        break;    
        case 3:
          text = "hundred";
        break;
        case 4:
          text = "thousand";
        break; 
        default:
          text = "oops! try again";
        break;
          
    }
    console.log("the number "+value+" is "+text+" in words");
process.exit();
}); 

/*Write a program that takes User Inputs and does Unit Conversion of different Length units
1. Feet to Inch                               3. Inch to Feet
         2. Feet to Meter                             4. Meter to Feet*/

const readline = require('readline-sync');
let num = readline.questionInt("Enter your choice for conversion: \n1. Feeet to inch " + ""
        + "\n2. Feet to meter \n3. Inch to feet \n4. Meter to feet\n");
switch (num) {
        case 1:
                let feet = readline.questionInt("Enter how many feets? ");
                console.log(feet * 12 + " inches");
                break;
        case 2:
                let feets = readline.questionInt("Enter how many feets? ");
                console.log((feets * 100) / 328 + " Meters");
                break;
        case 3:
                let inch = readline.questionInt("Enter how many inches? ");
                console.log(inch / 12 + " feets");
                break;
        case 4:
                let meter = readline.questionInt("Enter how many meters? ");
                console.log((meter * 328) / 100 + " feets");
                break;
        default:
                console.log("Invalid input");
                break;
}
