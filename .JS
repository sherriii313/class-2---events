console.log("===== ARITHMETIC OPERATORS =====");

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Power:", a ** b);


console.log("===== ASSIGNMENT OPERATORS =====");

let x = 10;

x += 5;
console.log("x += 5:", x);

x -= 3;
console.log("x -= 3:", x);

x *= 2;
console.log("x *= 2:", x);

x /= 4;
console.log("x /= 4:", x);

x %= 3;
console.log("x %= 3:", x);


console.log("===== COMPARISON OPERATORS =====");

let age = 12;

console.log("age > 10:", age > 10);
console.log("age < 10:", age < 10);
console.log("age >= 12:", age >= 12);
console.log("age <= 12:", age <= 12);

console.log("age == 12:", age == 12);
console.log("age != 15:", age != 15);

console.log("age === 12:", age === 12);
console.log("age !== 15:", age !== 15);


console.log("===== LOGICAL OPERATORS =====");

let studentAge = 12;
let marks = 80;

console.log("AND:", studentAge >= 10 && marks >= 50);
console.log("OR:", studentAge >= 18 || marks >= 50);
console.log("NOT:", !(studentAge >= 18));


console.log("===== INCREMENT / DECREMENT =====");

let number = 5;

number++;
console.log("After ++:", number);

number--;
console.log("After --:", number);


console.log("===== STRING OPERATOR =====");

let firstName = "Muhammad";
let lastName = "Shayan";

console.log(firstName + " " + lastName);
