let stringA: string = 'apple';
let stringB: string = 'orange';
let numberX: number = 10;
let numberY: number = 5;
let colors: string[] = ['red', 'green', 'blue'];
let targetColor: string = 'green';

// Tests for equality and inequality with strings
console.log("Are stringA and stringB equal? I predict False.");
console.log(stringA === stringB);

// Tests using the lower case function
console.log("Is stringA equal to 'APPLE' (case insensitive)? I predict True.");
console.log(stringA.toLowerCase() === 'apple');

// Numerical tests
console.log("Is numberX equal to numberY? I predict False.");
console.log(numberX === numberY);

console.log("Is numberX greater than numberY? I predict True.");
console.log(numberX > numberY);

console.log("Is numberX less than or equal to numberY? I predict False.");
console.log(numberX <= numberY);

// Tests using "and" and "or" operators
console.log("Is stringA equal to 'apple' and numberX is greater than 5? I predict True.");
console.log(stringA === 'apple' && numberX > 5);

console.log("Is stringB equal to 'orange' or numberY is less than 2? I predict True.");
console.log(stringB === 'orange' || numberY < 2);

// Test whether an item is in an array
console.log(`Is '${targetColor}' in the colors array? I predict True.`);
console.log(colors.indexOf(targetColor) !== -1);

// Test whether an item is not in an array
console.log(`Is 'yellow' not in the colors array? I predict True.`);
console.log(colors.indexOf('yellow') === -1);
