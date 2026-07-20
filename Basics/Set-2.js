// Q21
// Predict the output.
// console.log("5" + 2);

// output - 52

// Q22
// console.log("5" - 2);

// output - 3

// Q23
// console.log("5" * 2);

// output - 10

// Q24
// console.log("5" / 2);

// output - 2.5

// Q25
// console.log("5" % 2);

// output - 1

// Q26
// console.log(5 + true);

// output - 6

// Q27
// console.log(5 + false);

// output - 5

// Q28
// console.log(true + true);

// output - 2

// Q29
// console.log(false + false);

// output - 0

// Q30
// console.log("5" + true);

// output - 5true

// Q31
// console.log("5" - true);

// output - 4

// Q32
// console.log("5" + null);

// output - 5null

// Q33
// console.log("5" + undefined);

// output - 5undefined

// Q34
// console.log(null + 1);
// Number(null)      //0

// output - 1

// Q35
// console.log(undefined + 1);
// Number(undefined)  //NaN

// output - NaN

// Q36
// Predict the output.
// console.log(Number("123"));

// output - 123  (String convert itself into number)

// Q37
// console.log(Number("123abc"));

// output - NaN (because string is also part of value)

// Q38
// console.log(String(123));

// output - '123' (convert itself into string)

// Q39
// console.log(Boolean(""));

// output - false (bcz "" it is one of the falsy value)

// Q40 ⭐ (Mini Interview)
// Predict the output.

// console.log(Boolean(" ")); //true
// console.log(Boolean("0")); //true
// console.log(Boolean(0)); //false
// console.log(Boolean(1)); //true
// console.log(Boolean(-1)); //true
// console.log(Boolean([])); //true
// console.log(Boolean({})); //true


// 💥 Bonus Theory

// T1.
// Difference between:
// Implicit Type Conversion -> implicite conversion means the conversion that peroform by values like eg true + 1 then output will be 2 it happens because of implicite conversion plays role here 
// Explicit Type Conversion -> explicite like we have to write a code for it like conversion from number to string or vice versa eg log(number("124")) it return 123 after converting itself into number

// T2.
// List all Falsy Values in JavaScript.
// values  -> false , null , NaN , undefined , 0 , "" , docuement.all

// T3.
// Why does this return "object"?
// typeof null  - it is a one of quirks in js 
// typeof null === "object" is a historical bug in JavaScript kept for backward compatibility.

// T4.
// Difference between:
// Number() -> convert string into number eg Number("123") // 123 ,Number("123abc") //NaN
// parseInt() -> read integer from beginning where it get odd char or something its stop there eg parseInt("123abc") // 123 , parseInt("50px") // 50
// parseFloat() -> it read decimal as well from beginning eg parseInt("12.50px") // 12.50
