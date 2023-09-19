/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

// variable name conventions
let jonas_matilda = 'jm';
let $function = 27;

let PI = 3.141592653589793;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// use let when declaring a mutable variable
let age = 30;
age = 31;

// use const when declaring a constant variable
const birthYear = 1991;

// not a valid expression
// birthYear = 1992;

var job = 'programmer';
job = 'teacher';

lastName = 'Owens';
console.log(lastName);

// math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 *2 

const firstName = 'Jonas';
const lastName = 'Shmedtmann';
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25;
x *= 4; // x = x * 4 = 100;
x++; // x = x + 1 = 101;
x--; // x = x - 1 = 100;
x--; // x = x - 1 = 99;
console.log(x);

// Copmarison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5; // x = y = 10;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIJohn < BMIMark;
console.log(markHigherBMI);
*/

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with 
multiple 
lines `);