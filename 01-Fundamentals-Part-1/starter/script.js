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


const age = 6;

if (age >= 18) {
    console.log('Sarah can start driving 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah has ${yearsLeft} years left to start driving 🚗`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);


// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

// 2.21 Truthy and Falsy Values

// 5 truthy values: 1,!0,!undefined,!null,!NaN
// 5 falsy values: 0, '', undefined, null, NaN,

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log(`You should get a job!`);
}

let height = 0;
if (height) {
    console.log(`Yay! height is defined`);
} else {
    console.log(`Height is undefined`)
}

// 2.22 Equality Operators == vs. ===

const age = '18';
if (age === 18) console.log('You just became an adult (strict)');

if (age == 18) console.log('You just became an adult (loose)');

const favorite = Number(prompt(`What's your favorite number?`));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log(`Cool! 23 is an amazing number`);
} else if (favorite === 7) {
    console.log(`7 is also a cool number!`);
} else {
    console.log(`${favorite} is not a cool number!`);
}

if (favorite !== 23) console.log(`Why not 23?`);


// 2.23 Boolean logic

const hasDriversLicense = true; // Variable A
const hasGoodVision = true; // Variable B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


if (hasDriversLicense && hasGoodVision) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Sarah is not able to drive!`);
}

const isTired = false; // Variable C

console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Sarah is not able to drive!`);
}
*/

/*
CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/

// const dolphinsGame1 = 96;
// const koalasGame1 = 88;

// const dolphinsGame2 = 108;
// const koalasGame2 = 91;

// const dolphinsGame3 = 89;
// const koalasGame3 = 110;

// const dolphinsAverage = (dolphinsGame1 + dolphinsGame2 + dolphinsGame3) / 3;
// const koalasAverage = (koalasGame1 + koalasGame2 + koalasGame3) / 3;

// if (dolphinsAverage > koalasAverage) {
//     console.log(`Dolphins win!`);
// } else if (koalasAverage > dolphinsAverage) {
//     console.log(`Koalas win!`);
// } else {
//     console.log(`It's a tie!`);
// }

const dolphinsGame1 = 97;
const koalasGame1 = 109;

const dolphinsGame2 = 112;
const koalasGame2 = 95;

const dolphinsGame3 = 86;
const koalasGame3 = 91;

const dolphinsAverage = (dolphinsGame1 + dolphinsGame2 + dolphinsGame3) / 3;
const koalasAverage = (koalasGame1 + koalasGame2 + koalasGame3) / 3;

console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`Dolphins win the trophy!`);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log(`Koalas win the trophy!`);
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log(`It's a tie!`);
} else {
    console.log(`No one wins!`);
}