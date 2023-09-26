'use strict';

// Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

console.log(describeCountry('Finland', 6000000, 'Helsinki'));
console.log(describeCountry('United States', 100000000, 'Washington DC'));
console.log(describeCountry('Canada', 30000000, 'Ontario'));

// Function Declarations vs. Expressions

function percentageOfWorld1(population) {
    return (population / 790) * 100;
}

const percentageOfWorld2 = function percentageOfWorld1(population) {
    return (population / 790) * 100;
}

const unitedStatesPercentage = percentageOfWorld2(100);
const finlandPercentage = percentageOfWorld1(60);
const canadaPercentage = percentageOfWorld1(30);

console.log(unitedStatesPercentage);
console.log(finlandPercentage);
console.log(canadaPercentage);

// Arrow Functions

const percentageOfWorld3 = population => (population / 790) * 100;
const unitedStatesPercentage2 = percentageOfWorld3(100);
const finlandPercentage2 = percentageOfWorld3(60);
const canadaPercentage2 = percentageOfWorld3(30);

console.log(unitedStatesPercentage2);
console.log(finlandPercentage2);
console.log(canadaPercentage2);