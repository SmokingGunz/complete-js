"use strict";
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

/*
// 3.42 Introduction to Objects

const jonasArray = [
    'Jonas',
    'Shmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'John', 'Jane']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Shmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'John', 'Jane']
};


// 3.43 Dot vs. Bracket notation

const jonas = {
    firstName: 'Jonas',
    lastName: 'Shmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'John', 'Jane']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// cannot do this!! vvvv
// console.log(jonas.'first' + nameKey);

const interestedIn = prompt(`What do you want to know about jonas? Choose between firstName, lastName, age, job, and friends.`)


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log(`No ${interestedIn} found!`);
}

jonas.location = 'Portland';
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael."

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);


// 3.44 Object Methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Shmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'John', 'Jane'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this)
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`;
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
// console.log(jonas['calcAge'](1991));

// Challenge
// "Jonas is a 46-year old teacher, and he has a/or no drivers license."

if (jonas.hasDriversLicense) {
    console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has a drivers license.`);
} else {
    console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has no drivers license.`);
}

console.log(jonas.getSummary());
*/

/*
CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
 */

/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}
*/
/*
// 3.46 Loops

// console.log(`Lifting weights repetition 1 🏋️‍♀️`);
// console.log(`Lifting weights repetition 2 🏋️‍♀️`);
// console.log(`Lifting weights repetition 3 🏋️‍♀️`);
// console.log(`Lifting weights repetition 4 🏋️‍♀️`);
// console.log(`Lifting weights repetition 5 🏋️‍♀️`);
// console.log(`Lifting weights repetition 6 🏋️‍♀️`);
// console.log(`Lifting weights repetition 7 🏋️‍♀️`);
// console.log(`Lifting weights repetition 8 🏋️‍♀️`);
// console.log(`Lifting weights repetition 9 🏋️‍♀️`);

// for loop keeps running while condition is true
for (let rep = 1; rep < 11; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}


// 3.47 Looping Arrays, Breaking and Continueing

const jonasArray = [
    'Jonas',
    'Shmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'John', 'Jane'],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    // Reading from jonasArray
    console.log(jonasArray[i], typeof jonasArray[i]);

    // Filling types array
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

// Filling ages array with years through for loop

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log(`----- ONLY STRINGS -----`);
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue; // this skips over non-string values
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log(`----- BREAK WITH NUMBER -----`);
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break; // Breaks when a number is found
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log(`----- CONTINUE WITH NUMBER -----`);
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'number') continue; // Continues when a number is found
    console.log(jonasArray[i], typeof jonasArray[i]);
}

// 3.48 Looping Backwards and Loops In Loops

const jonasArray = [
    'Jonas',
    'Shmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'John', 'Jane'],
    true
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----- Starting Exercise ${exercise} -----`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} ���️�����️`)
    };
}


// 3.49 While Loops

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} ���️�����️`);
// };

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep} ���️�����️`);
    rep++;
};

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You Rolled A ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
};
*/

/*

CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

1. First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

3. Call the function with the totals array.
*/

/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}
console.log(tips);
console.log(totals);
console.log(bills);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
*/

/*
// 3.33 Functions

function logger() {
    console.log(`My Name is Jonas`);
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 10);
console.log(appleJuice);
console.log(fruitProcessor(5, 10));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// 3.34 Function Declarariton vs. Function Expression

// function Declararition
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function Expression

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

// 3.35 Arrow Functions

// function Expression

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// 3.36 Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 10);
console.log(appleJuice);

// 3.37 Function review

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} retires in ${retirement} years.`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

// 3.39 Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'John';
const friend3 = 'Jane';

const friends = ['Michael', 'John', 'Jane'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020)
console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

// friends = ['Michael', 'John', 'Jane', 'Jay'];

const firstName = 'Jonas';
const jonas = [firstName, 'Shmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const years1 = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge2(years1));

const age1 = calcAge2(years1[0]);
const age2 = calcAge2(years1[1]);
const age3 = calcAge2(years1[2]);
console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);

// 3.40 Basic Array Operations (Methods)

const friends = ['Michael', 'John', 'Jane'];

// add elements to the end of the array
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// add elements to the beginning of the array
friends.unshift('John');
console.log(friends);

// remove elements from the end of the array
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

// remove elements from the beginning of the array
friends.shift();
console.log(friends);

console.log(friends.indexOf('John'));
console.log(friends.indexOf('Jay'));

console.log(friends.includes('John'));
console.log(friends.includes('Jay'));

if (friends.includes('John')) {
    console.log(`You have found John in your friends list`);
}

// 3.42 Introduction to objects

const jonasArray = [
    'Jonas',
    'Shmedtmann',
    2037 - 1881,
    'teacher',
    ['Michael', 'John', 'Jane']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Shmedtmann',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'John', 'Jane']
}

// 3.43 Dot vs. Bracket notation

const jonas = {
    firstName: 'Jonas',
    lastName: 'Shmedtmann',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'John', 'Jane']
}

console.log(jonas);

console.log(jonas.firstName);
console.log(jonas['firstName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt(`What do you want to know about Jonas? Choose between first name, last name, age, job, and friends?`);


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log(`Sorry, I don't know about ${interestedIn}.`);
}

jonas.location = 'New York';
jonas['twitter'] = '@jonasshmedtmann';

//Challenge
// 'Jonas has 3 friends, and his best friend is Michael.'

const jonasInfo = `${jonas.firstName} has ${jonas.friends.length} friends, and his bestfriend is ${jonas.friends[0]}.`;

console.log(jonasInfo);

// 3.44 Object Methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Shmedtmann',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Michael', 'John', 'Jane'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
        //     return 2037 - birthYear;
        // }
        // calcAge: function () {
            //     return 2037 - this.birthYear;
            // }

            calcAge: function () {
                this.age = 2037 - this.birthYear;
                return this.age;
            },

            getSummary: function () {
                return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'his drivers license' : 'no drivers license'}.`;
            }

        };


        console.log(jonas.calcAge());
        // console.log(jonas['calcAge']());

        console.log(jonas.age);
        console.log(jonas.age);
        console.log(.age);

        // Challenge
        // 'Jonas is a 46 year old teacher, and he has a drivers license.'


        const jonasInfo = `${jonas.firstName} is a ${jonas.age} year old ${jonas.job}, and he has ${jonas.hasDriversLicense ? 'his drivers license' : 'no drivers license'}.`;

        console.log(jonasInfo);
        console.log(jonas.getSummary());

        // 3.46 Iteration: The for loop

        console.log('Lifting weights repetition 1 🏋️‍♀️')
        console.log('Lifting weights repetition 2 🏋️‍♀️')
        console.log('Lifting weights repetition 3 🏋️‍♀️')
        console.log('Lifting weights repetition 4 🏋️‍♀️')
        console.log('Lifting weights repetition 5 🏋️‍♀️')
        console.log('Lifting weights repetition 6 🏋️‍♀️')
        console.log('Lifting weights repetition 7 🏋️‍♀️')
        console.log('Lifting weights repetition 8 🏋️‍♀️')
        console.log('Lifting weights repetition 9 🏋️‍♀️')
        console.log('Lifting weights repetition 10 🏋️‍♀️')

        for (let i = 1; i <= 10; i++) {
            console.log(`Lifting weights repetition ${i} ���️‍��️`);
        }

        // 3.47 Looping arrays, breaking and continuing

        const jonasArray = [
            'Jonas',
            'Shmedtmann',
            2037 - 1881,
            'teacher',
            ['Michael', 'John', 'Jane']
        ];

        const types = [];

        for (let i = 0; i < jonasArray.length; i++) {
            // Reading from jonasArray
            console.log(jonasArray[i]);

            // Filling the types array
            // types[i] = typeof jonasArray[i];
            types.push(typeof jonasArray[i]);
        }

        console.log(types);

        const years = [1990, 1967, 2002, 2010, 2018];
        const ages = [];

        for (let i = 0; i < years.length; i++) {
            ages.push(2037 - years[i]);
        }

        console.log(ages);

        for (let i = 0; i < jonasArray.length; i++) {
            if (typeof jonasArray[i] !== 'string') continue;

            console.log(jonasArray[i], typeof jonasArray[i]);
        }

        for (let i = 0; i < jonasArray.length; i++) {
            if (typeof jonasArray[i] === 'number') break;

            console.log(jonasArray[i], typeof jonasArray[i]);
        }

// 3.48 Looping backwards and Loops in Loops

const jonasArray = [
    'Jonas',
    'Shmedtmann',
    2037 - 1881,
    'teacher',
    ['Michael', 'John', 'Jane']
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------------- Exercise ${exercise} -------`)
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise} Lifting weights repetition ${rep} ���️����️`);
    }
}
*/

// 3.49 While Loop

// for (let i = 1; i <= 10; i++) {
//     console.log(`Lifting weights repetition ${i} ���️����️`)
// }

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} ���️����️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}!`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log("Loop is about to end...");
        break;
    }
}

while (dice === 6) {
    console.log("Loop is about to end...");
    break;
}
