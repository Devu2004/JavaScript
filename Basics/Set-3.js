// Q41
// Predict the output.
// console.log(10 + 5 * 2);
// output - 20

// Q42
// console.log((10 + 5) * 2);
// output - 30

// Q43
// console.log(20 / 5 + 2);
// output - 6

// Q44
// console.log(20 / (5 + 5));
// output - 2

// Q45
// console.log(10 % 3);
// output - 1

// Q46
// Predict the output.
// let a = 5;
// console.log(a++); - 5
// console.log(a); - 6

// Q47
// let a = 5;
// console.log(++a); - 6 
// console.log(a); - 6


// Q48
// let a = 5;
// console.log(a--); - 5
// console.log(a); - 4

// Q49
// let a = 5;
// console.log(--a); - 4
// console.log(a); - 4

// Q50 ⭐ Interview Favourite
// Predict the output.
// let a = 5;
// console.log(a++ + ++a); 
// output - 12

// Q51
// let a = 10;
// a += 5;
// console.log(a);
// output -  15


// Q52
// let a = 10;
// a -= 3;
// console.log(a);
// output - 7

// Q53
// let a = 10;
// a *= 2;
// console.log(a);
// output - 20

// Q54
// let a = 20;
// a /= 4;
// console.log(a);
// output - 5

// Q55
// let a = 20;
// a %= 6;
// console.log(a);
// output - 2

// Q56
// Predict the output.
// console.log(5 == "5");
// output - true

// Q57
// console.log(5 === "5");
// oytput - false

// Q58
// console.log(null == undefined);
// bcz - null == false & undefined == false both falsy values
// output - true

// Q59
// console.log(null === undefined);
// bcz types are diffrent null is object and undefined is undefined
// output - false

// Q60 ⭐ Interview Favourite
// Predict the output.
// console.log(NaN == NaN); false 
// console.log(NaN === NaN); false
// console.log(Object.is(NaN, NaN)); true


// 🔥 Bonus Theory
// T1
// Difference between:
// == -> it is just check the value not strictrly check the data type eg 5 == "5" - true but types are diffrent
// === -> it checks values and data type as well eg 5 === "5" - false bcz data types are diffrent 
// Kab use karna chahiye? -> === use when anything perform strictly like login system in which password need to be match exactly to orignal pass when user login 


// T2
// Difference between:
// Prefix Increment (++a) -> it increase value before using then use update value
// Postfix Increment (a++) -> it use actual value first then update and then next place use updated value 

// T3
// Why does this return false?
// NaN == NaN
// bcz NaN is not equal to any value, including itself. Therefore both NaN == NaN and NaN === NaN return false. Use Number.isNaN() or Object.is() to check for NaN.

// T4
// What is Operator Precedence? -> prescendence means importance which operator will operates first like high class low class type eg bracket is solve first then divide then multiply etc.

// T5 ⭐ Interview
// Difference between
// x = x + 1
// and
// x += 1
// Kya internally same hain ya different? - both are same internally the way of writing is diffrent like x = x+1 this is make short with the x+=1 assignment operator but both do same 


// 🎯 Challenge Question 
// let a = 2; 
// let b = a++ + ++a + a++ + --a;
// console.log(a); - 4
// console.log(b); - 14

