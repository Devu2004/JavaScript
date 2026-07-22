// Q81
// Write a program to check whether a number is divisible by 5.
// let num = 12345;
// if(num%5==0) console.log('Divisible by 5');
// else console.log('Not divisible');

// Q82
// Write a program to check whether a number is divisible by 5 and 11.
// let num = 55;
// if(num%5==0 && num%11==0) console.log('Divisible by 5 and 11');
// else console.log('Not divisible');

// Q83
// Write a program to check whether a character is a vowel or a consonant.
// Example:
// Input: a
// Output: Vowel
// let char = 'a'.toLowerCase()
// if(char==='a' || char ==='e' || char === 'i' || char === 'o' || char === 'u') console.log('Vowel');
// else console.log('Constant');

// Q84
// Write a program to check whether a character is uppercase or lowercase.
// let char = 's'
// if(char === char.toLowerCase()) console.log('lowercase');
// else console.log('Uppercase');

// Q85
// Write a program to check whether a number is a 3-digit number.
// Examples:
// 99 → No
// 100 → Yes
// 999 → Yes
// 1000 → No
// -250 → Yes
// (Hint: Negative numbers bhi consider karna.)
// let num = 223
// let checker = Math.abs(num).toString().length
// length is directly not availiable for numbers in js so we have to convert it into string first
// math.abs use for ovnerting negative to positive so that we can consider negative values as well
// if(num>=0 || num<=0){
//     if(Math.abs(checker) === 3) console.log('Yes');
//     else console.log('No');
// }

// Q86
// Write a program to check whether a year is a leap year.
// (Abhi simple wala nahi, proper leap year rule use karna.)
let year = 2100;
if ((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0)
  console.log("Leap year");
else console.log("Not a leap year");

// Q87
// Write a program to check whether a character is an alphabet, a digit, or a special character.
// Examples:
// A → Alphabet
// 7 → Digit
// # → Special Character
let char = "";
if (char >= "a" && char <= "z") console.log("Alphabet");
else if (char >= "0" && char <= "9") console.log("Digit");
else console.log("Special char");

// Q88
// Write a program to find the smallest among three numbers.
let n1 = 12;
let n2 = 13;
let n3 = 5;
if (n1 == n2 && n1 == n3) console.log("All equal");
else if (n1 < n2 && n1 < n3) console.log(`n1 : ${n1} is smallest`);
else if (n2 < n1 && n2 < n3) console.log(`n2 : ${n2} is smallest`);
else if (n3 < n1 && n3 < n2) console.log(`n3 : ${n3} is smallest`);
else console.log("Enter valid number");

// Q89
// Write a program to check whether a number lies between 10 and 50 (inclusive).
let num = 39;
if (num >= 10 && num <= 50) console.log("Number is lies between 10 & 50");
else console.log("Not lies");

// Q90 ⭐
// Predict the output.
// let x = 0;
// if (x) {
//     console.log("A");
// } else {
//     console.log("B");
// }
// output - B

// Q91 ⭐
// Predict the output.
// let x = "0";
// if (x) {
//     console.log("A");
// } else {
//     console.log("B");
// }
// output - A

// Q92 ⭐
// Predict the output.
// let x = [];
// if (x) {
//     console.log("A");
// } else {
//     console.log("B");
// }
// output - A

// Q93 ⭐
// Predict the output.
// let x = {};
// if (x) {
//     console.log("A");
// } else {
//     console.log("B");
// }
// output - A

// Q94 ⭐
// Predict the output.
// let x = NaN;
// if (x) {
//     console.log("A");
// } else {
//     console.log("B");
// }
// output - B

// Q95
// Write a program to check whether a person can donate blood.
// Conditions:
// Age ≥ 18
// Weight ≥ 50
// Otherwise print Not Eligible.
let age = 12
let weight = 46
if(age>= 18 && weight>=50) console.log('Eligible');   
else console.log('Not eligible');

// Q96
// Write a program to calculate electricity bill.
// Conditions:
// 0-100 units     → ₹5/unit
// 101-200 units   → ₹7/unit
// Above 200       → ₹10/unit
// (No slab calculation yet—sirf ek rate apply karo based on the range.)
let units = 209;
let bill = 0;
if (units >= 0 && units < 101) {
  bill = units * 5;
  console.log(bill);
} else if (units >= 101 && units < 201) {
  bill = units * 7;
  console.log(bill);
} else if (units > 200) {
  bill = units * 10;
  console.log(bill);
} else {
  console.log("Enter valid units");
}

// Q97
// Write a program to calculate discount.
// Purchase >= 5000 → 20%
// Purchase >= 2000 → 10%
// Otherwise → No Discount
let purchase = 6000;
let discount = 0;
if (purchase < 0) {
  console.log("Enter Valid purchase rate");
} else if (purchase >= 2000 && purchase < 5000) {
  discount = (purchase / 100) * 10;
  console.log(`Your orignal price of purchase is - ${purchase}`);
  console.log(
    `Discount of 10% | You have to pay only - ${purchase - discount}`,
  );
} else {
  discount = (purchase / 100) * 20;
  console.log(`Your orignal price of purchase is - ${purchase}`);
  console.log(
    `Discount of 20% | You have to pay only - ${purchase - discount}`,
  );
}

// Q98
// Write a program to classify age.
// 0-12   → Child
// 13-19  → Teenager
// 20-59  → Adult
// 60+    → Senior Citizen
let age = 14;
if (age>0){
    if(age>0 && age<13){
        console.log('Child');
    }
    else if(age<20){
        console.log('Teenager');
    }
    else if(age<60){
        console.log('Adult');
    }
    else{
        console.log('Senior Citizen');
    }
}
else {
    console.log('Enter valid age');
}

// Q99
// Write a program to check whether three sides can form a valid triangle.
// Condition:
// a + b > c
// a + c > b
// b + c > a
let a = 12
let b = 12
let c = 13
if(a+b>c && a+c>b && b+c > a) console.log('vailid triangle');
else console.log('Not valid traingle');


// Q100 ⭐ Mini Challenge
// Without using switch, write a program that prints:
// 1 → Monday
// 2 → Tuesday
// 3 → Wednesday
// 4 → Thursday
// 5 → Friday
// 6 → Saturday
// 7 → Sunday
// Otherwise → Invalid Day
// Condition: Use only if...else if.
let day = 1;
if (day > 0 && day < 8) {
  if (day == 1) console.log("Monday");
  else if (day == 2) console.log("Tuesday");
  else if (day == 3) console.log("Wednesday");
  else if (day == 4) console.log("Thursday");
  else if (day == 5) console.log("Friday");
  else if (day == 6) console.log("Saturday");
  else console.log("Sunday");
} else {
  console.log("Invalid day");
}

// 🎯 Bonus Theory

// T1
// Difference between:
// if (a > 10 && a < 20) - in which from both if any one condition fails it will not run
// and
// if (a > 10 || a < 20) - in if any one passes then it runs
// Explain with examples.

// T2
// Why is this condition always true?
// if ("false") {
//     console.log("Hello");
// }
// because if we write false in a quote it is not an boolean value it string then and inside string anything written it will be true

// T3
// When should you prefer else if over multiple separate if statements?
// else if - use when there is multiple condition but run only one that condition is true its stop executing flow where condition is true 
// if - if condition is true then it runs blocks as well 
