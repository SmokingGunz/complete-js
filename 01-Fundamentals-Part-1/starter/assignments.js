
const country = 'United States';
const continent = 'North America';
let population = 1000000;
const description = 'Portugal is in Europe and its 11 million people speak portuguese.'

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
let language;

language = 'English';
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log(population / 2);
let halfPopulation = population / 2;
console.log(halfPopulation);

population++;
console.log(population);

halfPopulation++;
halfPopulation += 5;
console.log(halfPopulation);

let findlandPopulation = 6000000;
console.log(population > findlandPopulation);
console.log(population > 33000000);

const countryPopulation = 33000000;
let isMyPopulationBigger = population > countryPopulation;
console.log(isMyPopulationBigger);

const newDescription = `I live in the ${country}, which is location in ${continent}. We have a population of ${population} people. I speak ${language}. Did you know ${description}?`;

console.log(newDescription);

// if else statements 
population = 40000000;

if (population > 33000000) {
    console.log('Portugals population is above average');
} else {
    console.log('Portugals population is below average');
}

// Type Conversion and Coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2)

// Equality Operators == vs. ===

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border!');
// } else {
//     console.log('No border!');
// }

// Logical Operators

console.log(population, language, isIsland);

if (population < 50000000 && language === 'English' && !isIsland) {
    console.log('You should live in Portugal!');
} else {
    console.log('Portugal does not meet your criteria!');
}