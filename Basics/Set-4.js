// Q61
// Write a program to check if a number is positive.
let num = 10
if(num>0) console.log('Positive');
else console.log('Negative');

// Q62
// Write a program to check if a person is eligible to vote.
// Condition:
age >= 18
let age = 19
if(age>=18) console.log('elgiible');
else console.log('not eligible');


// Q63
// Predict the output.
// let age = 17;
// if (age >= 18) {
//     console.log("Adult");
// }
// console.log("Done");
// Output - Done

// Q64
// Predict the output.
// if (true) {
//     console.log("JavaScript");
// }
// Output - JavaScript

// Q65
// Predict the output.
if (false) {
    console.log("Hello");
}
console.log("World");
// Output - world

// Q66
// Write a program to check whether a number is even or odd.
// let num = 3;
// if(num%2 == 0) console.log('even');
// else console.log('odd');

// Q67
// Write a program to check the greater number between two numbers.
let n1 = 45;
let n2 = 45;
if(n1===n2) console.log('Equal');
else if(n1>n2) console.log(`${n1} wins`);
else console.log(`${n2} wins`);

// Q68
// Predict the output.
let marks = 80;
if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}
// output - Pass

// Q69
// Predict the output.
// let num = -5;
// if (num > 0) {
//     console.log("Positive");
// } else {
//     console.log("Negative");
// }
// Output - Negative

// Q70 ⭐
// Predict the output.
if ("") {
    console.log("A");
} else {
    console.log("B");
}
// Output - B (bcz it is "" falsy values)

// Q71
// Write a program to print grades.
// 90+  -> A
// 80+  -> B
// 70+  -> C
// 60+  -> D
// Below -> Fail
function gradeChcker(marks){
    if(marks>=90 && marks<101) return 'A'
    else if(marks>=80 && marks<90) return 'B'
    else if(marks>= 70 && marks<80) return 'C'
    else if(marks>=60 && marks<70) return 'D'
    else if(marks<60 && marks>1) return 'Fail'
    else return 'Enter vailid marks'
}
gradeChcker(34) 

// Q72
// Predict the output.
let marks = 91;
if (marks >= 90) {
    console.log("A");
}
else if (marks >= 80) {
    console.log("B");
}
else {
    console.log("Fail");
}
// Output - A

// Q73
// Predict the output.
// let marks = 75;
// if (marks >= 90) {
//     console.log("A");
// }
// else if (marks >= 80) {
//     console.log("B");
// }
// else if (marks >= 70) {
//     console.log("C");
// }
// else {
//     console.log("Fail");
// }
// Output - C

// Q74 ⭐ Interview
// Find the mistake.
// let age = 20;
// if(age > 18){
//     console.log("Adult");
// }
// else(age == 18){
//     console.log("Exactly 18");
// }
// Output - in else we cannot pass condition 

// Q75
// Write a program to find the largest among three numbers.
// function largestFinder(n1,n2,n3){
//     if(n1 == n2 && n1==n3) return 'All equal'
//     else if(n1>n2 && n1>n3) return `${n1} is Largest`
//     else if(n2>n3 && n2>n1) return `${n2} is Largest`
//     else if(n3>n2 && n3>n1) return `${n3} is Largest`
//     else return 'Enter valid number'
// }

// Q76
// Predict the output.
let day = 2;
switch(day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid");
}
// output - Tuesday

// Q77
// Predict the output.
// let day = 3;
// switch(day){
// case 1:
// console.log("Monday");
// break;
// case 2:
// console.log("Tuesday");
// break;
// default:
// console.log("Invalid");
// }
// Output - Invalid

// Q78 ⭐ Fall Through
// Predict the output.
let x = 1;
switch(x){
case 1:
console.log("One");
case 2:
console.log("Two");
default:
console.log("Done");
}
// Output - prints one two and done bcz there is no break

// Q79
// Write a switch program for:
// 1 -> January
// 2 -> February
// 3 -> March
// Default -> Invalid Month
let x = 1;
switch (x) {
    case 1:
        console.log('Jan')
        break;
    case 2:
        console.log('Feb');
        break;
    case 3:
        console.log('Mar');
        break;
    case 4:
        console.log('Apr');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('Jun');
        break;
    case 7:
        console.log('Jul');
        break;
    case 8:
        console.log('Aug');
        break;
    case 9:
        console.log('Sep');
        break;
    case 10:
        console.log('Oct');
        break;
    case 11:
        console.log('Nov');
        break;
    case 12:
        console.log('Dec');
        break; 
    default:
        console.log('Enter valid month');
        break;
}


// Q80 ⭐ Interview Favourite
// Convert this into a ternary operator.
// let age = 20;
// if(age >= 18){
//     console.log("Eligible");
// }
// else{
//     console.log("Not Eligible");
// }
// let age = 20
// age>=18 ? console.log('Eligible') : console.log('Not Eligible');


// 🔥 Bonus Theory
// T1
// Difference between:
// if -> this is compares and executes the conditions as well
// and
// switch -> This only compares the value not executes the condtion 
// When should we use each?

// T2
// What is Fall Through in switch? - fall through happens when there is no break in any cases break prevent fall through 

// T3
// Difference between
// if(condition) - in this we not write boolean but js insidely call it 
// and
// if(Boolean(condition)) - in this we directly call boolean

// T4 ⭐
// Which values make an if condition execute? - True values can make if conditions to run and perform task
// Explain Truthy and Falsy values with examples. - truthy and falsy values anre nothing but showing the nature of single values so we can get answers like if in any conditon single value will be written in if else then it will performed on the basis of their nature like if it falsy in nature then else block will be execute and if it true then execute if block 

// 🎯 Challenge Question
// Predict the output.
// let a = 5;
// if (a > 2)
//     if (a > 10)
//         console.log("A");
//     else
//         console.log("B");
// Output - B

