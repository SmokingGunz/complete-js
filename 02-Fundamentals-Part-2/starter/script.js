'use strict';
/*
// 3.32 Strict mode

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive!`);

// const interface = 'Audio';
// const private = 23;

// const if = 'Statement';


// 3.33 Functons

function logger() {
    console.log(`My name is Jonas`);
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number(`23`)


// 3.34 Function Declarations vs. Expressions

// function declaration
const age1 = calcAge1(1991);
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1);
console.log(age2);


// 3.35 Arrow Functions

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} has ${retirement} years until retirement.`;
};

console.log(yearsUntilRetirement(1991, 'Eric'));
console.log(yearsUntilRetirement(1986, 'Bob'));


// 3.36 Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(2, 3));


// 3.37 Fucntion Review

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} has ${retirement} years until retirement.`)
        return retirement;
    } else {
        console.log(`${firstName} is retired!`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Eric'));
console.log(yearsUntilRetirement(1950, 'James'));

// Function declaration - can be used before its declared
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// Function expression - function value stored in variable
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function - quick one-line function (has no 'this' keyword)
const calcAge3 = birthYear => 2037 - birthYear;
*/

/*
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/
/*
const calcAverage = (score1, score2, score3) => {

    return (score1 + score2 + score3) / 3;
}

// Test data 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

// Test data 2
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log(`No team wins...`)
    };
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins2, scoreKoalas2);
*/

/**

// 3.39 Introduction to Array

const friend1 = 'Michael';
const friend2 = 'John';
const friend3 = 'Jane';

const friends = ['Michael', 'John', 'Jane'];
console.log(friends);

// const years = new Array(1991, 1992, 1993, 1994);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Bob';
console.log(friends);

friends[friends.length - 1] = 'Sally';
console.log(friends);

// friends = ['Michael', 'John', 'Jane', 'Bob', 'Sally']; cannot do this!!

const firstName = 'Jonas';
const jonas = [firstName, 'Shmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// Exercise
const calcAge = (birthYear) => {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);


// 3.40 Array Methods

const friends = ['Michael', 'Steven', 'Peter'];
// adds element to the end of the array
const newLength = friends.push('Jay');
console.log(friends);

console.log(newLength);

// adds element to the beginning of the array
friends.unshift('John');
console.log(friends);

// removes element from the end of the array
const popped = friends.pop();
console.log(friends);
console.log(popped);

// removes element from the beginning of the array
friends.shift();
console.log(friends);

// returns the index of the element in the array
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);

// returns true if the element exists in the array
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log(`You have a friend named Peter!`);
}
*/

/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/

// const calcTip = (bill) => {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.2;
//     }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills);
// console.log(tips);

// console.log(totals);

