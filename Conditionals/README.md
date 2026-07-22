# 🚀 JavaScript Conditionals Mastery (Basics)

## 📌 Rules

- Don't run the code.
- Try to predict the output first.
- Use proper JavaScript syntax.
- Don't use functions unless required.

---

### Q81
Write a program to check whether a number is divisible by 5.

---

### Q82
Write a program to check whether a number is divisible by 5 and 11.

---

### Q83
Write a program to check whether a character is a vowel or a consonant.

**Example**

Input:
```
a
```

Output:
```
Vowel
```

---

### Q84
Write a program to check whether a character is uppercase or lowercase.

---

### Q85
Write a program to check whether a number is a 3-digit number.

**Examples**

```
99   → No
100  → Yes
999  → Yes
1000 → No
-250 → Yes
```

> Consider negative numbers as well.

---

### Q86
Write a program to check whether a year is a leap year.

> Use the proper leap year rule.

---

### Q87
Write a program to check whether a character is an alphabet, a digit, or a special character.

**Examples**

```
A → Alphabet
7 → Digit
# → Special Character
```

---

### Q88
Write a program to find the smallest among three numbers.

---

### Q89
Write a program to check whether a number lies between 10 and 50 (inclusive).

---

### Q90 ⭐ Predict the Output

```javascript
let x = 0;

if (x) {
    console.log("A");
} else {
    console.log("B");
}
```

---

### Q91 ⭐ Predict the Output

```javascript
let x = "0";

if (x) {
    console.log("A");
} else {
    console.log("B");
}
```

---

### Q92 ⭐ Predict the Output

```javascript
let x = [];

if (x) {
    console.log("A");
} else {
    console.log("B");
}
```

---

### Q93 ⭐ Predict the Output

```javascript
let x = {};

if (x) {
    console.log("A");
} else {
    console.log("B");
}
```

---

### Q94 ⭐ Predict the Output

```javascript
let x = NaN;

if (x) {
    console.log("A");
} else {
    console.log("B");
}
```

---

### Q95
Write a program to check whether a person can donate blood.

### Conditions

- Age ≥ 18
- Weight ≥ 50

Otherwise print:

```
Not Eligible
```

---

### Q96
Write a program to calculate the electricity bill.

### Conditions

```
0–100 units     → ₹5/unit
101–200 units   → ₹7/unit
Above 200       → ₹10/unit
```

> Apply only one rate based on the range (no slab calculation).

---

### Q97
Write a program to calculate the discount.

### Conditions

```
Purchase ≥ 5000 → 20%
Purchase ≥ 2000 → 10%
Otherwise        → No Discount
```

---

### Q98
Write a program to classify age.

```
0–12   → Child
13–19  → Teenager
20–59  → Adult
60+    → Senior Citizen
```

---

### Q99
Write a program to check whether three sides can form a valid triangle.

### Condition

```
a + b > c
a + c > b
b + c > a
```

---

### Q100 ⭐ Challenge

Without using `switch`, write a program that prints:

```
1 → Monday
2 → Tuesday
3 → Wednesday
4 → Thursday
5 → Friday
6 → Saturday
7 → Sunday
Otherwise → Invalid Day
```

> Use only `if...else if`.

---

## 📖 Theory

### T1

Explain the difference between:

```javascript
if (a > 10 && a < 20)
```

and

```javascript
if (a > 10 || a < 20)
```

Explain with examples.

---

### T2

Why is this condition always true?

```javascript
if ("false") {
    console.log("Hello");
}
```

---

### T3

When should you prefer `else if` over multiple separate `if` statements?

---