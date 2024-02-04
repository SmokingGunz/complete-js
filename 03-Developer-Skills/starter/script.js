// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/**
 * 
const x = 23;

let y = `23`;

if (x === 23) {
    console.log(y);
} else {
    console.log(x);
}

const calcAge = (birthDate) => 2037 - birthDate;

console.log(y);

console.log("writing stuff down");

console.log("something new");

console.log("is this going to take this away");

console.log("this is kinda cool though");

for (let i = 0; i < 10; i++) {
    console.log(i);
}

sum = 0;
while (sum < 100) {
    console.log(sum);
    sum++;
}
*/

// 5.59 Using Google, Stack Overflow and MDN

// PROBLEM;
// WE work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperaature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - what is temp amplitude? Answer: Difference between the highest and lowest temperatures.
// - How to compute the max and min temperatures? Answer: Find the highest and lowest temperatures in the array.
// - What is a sensor error and what to do when one accurs?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temperatures array?
// - Find min value in temperatures array?
// - Subtract min from max (amplitude) and then return it

const calcTempAmplitude = (temperatures) => {
    let max = temperatures[0];
    let min = temperatures[0];

    for (let i = 0; i < temperatures.length; i++) {
        const currentTemp = temperatures[i];
        if (typeof currentTemp !== 'number') continue;

        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
    }
    console.log(max, min);
    return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2)
// Function should now receive 2 arrays of temperatures.

// 1) Understanding the problem
// - With 2 arrays, shoudl we implement functionality twice? NO! Just merge the two arrays.

// 2) Breaking up into sub-problems
// -How to merger the two arrays?

const calcTempAmplitudeNew = (t1, t2) => {
    const temperatures = t1.concat(t2);
    console.log(temperatures);

    let max = temperatures[0];
    let min = temperatures[0];

    for (let i = 0; i < temperatures.length; i++) {
        const currentTemp = temperatures[i];
        if (typeof currentTemp !== 'number') continue;

        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
    }
    console.log(max, min);
    return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [1, 2, 4]);
console.log(amplitudeNew);
