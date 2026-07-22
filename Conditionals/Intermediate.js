// Q101 ⭐ ATM Withdrawal
// Write a program to check whether a user can withdraw money.
// Conditions:
// Balance ≥ Withdrawal Amount
// Withdrawal Amount > 0
// Withdrawal Amount should be a multiple of 100
// Otherwise print the proper reason.
// let balance = 3450;
// let withdrawal = 300;
// if(withdrawal>0){
//   if(balance>withdrawal){
//     if(withdrawal%100===0){
//         console.log(`Withdrawl of this ammount ${withdrawal} succefull!`);
//     }
//     else{
//         console.log('Amount must be a multiple of 100');
//     }
//   }
//   else{
//     console.log('Insuffiencient Balance');
//   }
// }else{
//     console.log('Enter valid withdrawl ammount');
// }

// Q102 ⭐ Login System
// Write a program.
// Stored Username : admin
// Stored Password : admin123
// Print:
// Login Successful
// Invalid Username
// Invalid Password
// let username = 'admin'
// let password = 'admin123'
// if(username === 'admin' && password === 'admin123'){
//     console.log('Login successful');
// }
// else if(username !== 'admin' && password === 'admin123'){
//      console.log('Invalid username');
// }
// else if(password !== 'admin123' && username === 'admin'){
//     console.log('Invalid password');
// }
// else{
//     console.log('Unautohrized access');
// }

// Q103 ⭐ Strong Password Checker
// Password rules:
// Minimum 8 characters ✅
// At least one uppercase 
// At least one lowercase
// At least one digit
// Print
// Strong Password
// or
// Weak Password
// Hint: For now you may use methods like .length, comparisons, and regex if you already know them. If not, mention your assumption.
let password = 'Devansh@#412e1'
let minChar = password.length>=8
let hasUpper = /[A-Z]/.test(password)
let hasLower = /[a-z]/.test(password)
let hasDigit = /[0-9]/.test(password)
if(minChar && hasUpper && hasLower && hasDigit) console.log('Strong password');
else console.log('Weak password');

// Q104 ⭐ Movie Ticket
// Age based ticket price.
// Below 5     → Free
// 5-17        → ₹100
// 18-59       → ₹250
// 60+         → ₹150
// let age = 81;
// let price = '';
// if(age>0 && age<=5){
//     price = 'Free'
//     console.log(price);
// }
// else if(age>5 && age<=17){
//     price = 100
//     console.log(price);
// }
// else if(age>17 && age<=59){
//     price = 250
//     console.log(price);
// }
// else if(age>59){
//     price = 150
//     console.log(price);
// }
// else {
//     console.log('Enter valid age');
// }

// Q105 ⭐ BMI Checker
// Given
// weight
// height
// Formula
// BMI = weight / (height * height)
// Print
// Underweight
// Normal
// Overweight
// Obese
// (Use standard BMI ranges.)
// let weight = 59
// let height = 1.77
// let BMI = weight / (height * height)
// if(BMI<18.5) console.log('Underweight');
// else if(BMI>=18.5 && 24.9) console.log('Normal');
// else if(BMI>=25.0 && 29.9) console.log('Overweight');
// else if(BMI>=30.0 && 39.9) console.log('Obese');
// else console.log('Enter valid values');

// Q106
// Write a calculator using if...else if.
// Support:
// +
// -
// *
// /
// %
// let operand1 = 120
// let operand2 = 0
// let operator = '/'
// if(operator === '+'){
//     console.log(operand1+operand2);
// }
// else if(operator === '-'){
//     console.log(operand1-operand2);
// }
// else if(operator === '*'){
//     console.log(operand1 * operand2);
// }
// else if(operator === '/'){
//     if(operand2 === 0){
//         console.log('Calculation not possible due to divider is : '+ operand2);
//     }
//     else{
//         console.log((operand1/operand2).toFixed(2));
//     }
// }
// else if(operator === '%'){
//     console.log(operand1%operand2);
// }
// else{
//     console.log('Enter valid operator');
// }

// Q107 ⭐ Leap Year (Trap)
// Predict the output.
// let year = 1900;
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
//     console.log("Leap");
// else
//     console.log("Not Leap");
// output - not leap

// Q108 ⭐
// Predict the output.
// let x = 15;
// if (x > 10)
//     if (x > 20)
//         console.log("A");
//     else
//         console.log("B");
// Output - B

// Q109 ⭐
// Predict the output.
// let x = 5;
// if (x > 10)
//     console.log("A");
// else if (x > 4)
//     console.log("B");
// else
//     console.log("C");
// output - B

// Q110 ⭐
// Predict the output.
// let x = "";
// if (!x)
//     console.log("A");
// else
//     console.log("B");
// output - A

// Q111 ⭐ Scholarship
// Rules:
// Marks >=90
// AND
// Attendance >=75
// ↓
// Eligible
// Else
// Not Eligible
// let marks = 90
// let att = 78
// if(marks>= 90 && att>=75) console.log('Eligible');
// else console.log('Not Eligible');

// Q112 ⭐ Cab Fare
// Distance
// 0-5 km → ₹100
// 6-15 km → ₹200
// Above 15 → ₹350
// let distance = 16
// let fare = 0
// if(distance>0 && distance<=5){
//     fare = 100;
//     console.log(fare);   
// }
// else if(distance>5 && distance<=15){
//     fare = 200
//     console.log(fare);
// }
// else if(distance>15){
//     fare = 350
//     console.log(fare);
// }
// else{
//     console.log('Enter valid distance');
// }

// Q113 ⭐ Electricity Bill (Slab)
// Now use actual slab calculation.
// Conditions:
// 0-100 units     → ₹5/unit
// 101-200 units   → ₹7/unit
// Above 200       → ₹10/unit
// Example
// 250 Units
// 100 × 5
// 100 × 7
// 50 × 10
// Calculate final bill.
let units = 334 // 100*5 + 100*7 + 134*10 = 2540
let amount = 0
if(units>0 && units<=100){
    amount = units*5;
    console.log('You have to pay : '+ amount);
}
else if(units>100 && units<=200){
    amount = ((100*5) + (units-100) * 7)
    console.log('You have to pay : '+ amount);
}
else if(units>200){
    amount = ((100*5) + (100*7) + (units-200)*10)
    console.log('You have to pay : '+ amount);
}
else{
    console.log('Enter valid units!');
}

// Q114 ⭐ Income Tax
// Income
// Below 5L
// ↓
// No Tax
// 5L-10L
// ↓
// 10%
// Above 10L
// ↓
// 20%
// Print tax amount.
// let income = 1000000
// let taxAmm = 0
// if(income>0 && income<=500000){
//     console.log('No Tax');
// } 
// else if(income>500000 && income<=1000000){
//     taxAmm = (income/100)*10
//     console.log(`You have to pay 10% tax from your ammount that is : ${taxAmm}`);
// }
// else if(income>1000000){
//     taxAmm = (income/100)*20
//     console.log(`You have to pay 20% tax from your ammount that is : ${taxAmm}`);
// }
// else {
//     console.log('Enter valid income!');
// }

// Q115 ⭐ Triangle Type
// Given
// a b c
// Print
// Equilateral 
// Isosceles 
// Scalene 
// Invalid 
// let a = 12
// let b = 11
// let c = 11
// if(a+b>c && b+c>a && c+a>b){
//     if(a==b && b==c && c==a){
//         console.log('Equilateral');
//     } 
//     else if(a == b || b == c || a == c){
//         console.log('Isosceles');
//     }
//     else if(a!=b && b!=c && c!=a){
//         console.log('Scalene');
//     }
//     else {
//         console.log('Enter valid sides');
//     }
// }
// else{
//     console.log('Invalid');
// }

// Q116 ⭐ Character Checker
// Given one character.
// Print
// Uppercase Alphabet
// Lowercase Alphabet
// Digit
// Special Character
// let char = '1'
// let digit = /[0-9]/.test(char)
// let lowercase = /[a-z]/.test(char)
// let uppercase = /[A-Z]/.test(char)
// if(digit) console.log('Digit');
// else if(lowercase) console.log('Lowercase');
// else if(uppercase) console.log('Uppercase');
// else console.log('Special charecter');

// Q117 ⭐
// Predict the output.
// console.log(Boolean("false"));
// output - true

// Q118 ⭐
// Predict the output.
// console.log(Boolean(" "));
// output - true

// Q119 ⭐
// Predict the output.
// let x = null;
// if (x == undefined)
//     console.log("A");
// else
//     console.log("B");
// Output - A

// Q120 ⭐ Mini Challenge
// Predict the output.
// let age = 17;
// let result = age >= 18 ? "Adult" : age >= 13 ? "Teen" : "Child";
// console.log(result);
// Output - Teen


// 🎯 Theory
// T1
// Difference between
// When should each be used?
// if - if is just use for checking the condition is true and false it executes only when condition is true
// nested if - it used when ther is 2-3 condition that are true one by one to checking from all the factors eg like if we have to check password is strong then we first check is length then is there any special char or not etc.
// else if - it used when one condition is true atleast all of them when we use else if it executes only one block of code that is true its not check other one

// T2
// Can every switch be converted into if...else? Yes
// Can every if...else be converted into switch? No - switch is just use for matching the cases that exist if else can easily make switch 
// Explain why.

// T3 ⭐ Interview
// What is the difference between
// if(a) - it decide on the basis of what is a by its nature if it truthy then execute else not
// if(a == true) - if a is just equal to true no matter its type then it will execute else not
// if(a === true) - if type of a is must equal to type of true when it runs else not 
// This is a very common interview question.

// 🎯 Challenge (No Run)
// Predict:
// let x = 0;
// if (x || "Hello")
//     console.log("A");
// else
//     console.log("B");
// Output - A

// let x = "";
// if (x && 10)
//     console.log("A");
// else
//     console.log("B");
// Output - B