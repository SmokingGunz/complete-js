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