var commonAnimals = ['Dog', 'Cat', 'Rabbit'];
// Print the names of each animal using a for loop
console.log("Names of common animals:");
for (var _i = 0, commonAnimals_1 = commonAnimals; _i < commonAnimals_1.length; _i++) {
    var animal = commonAnimals_1[_i];
    console.log(animal);
}
// Print a statement about each animal
console.log("\nStatements about each animal:");
for (var _a = 0, commonAnimals_2 = commonAnimals; _a < commonAnimals_2.length; _a++) {
    var animal = commonAnimals_2[_a];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
// Print a concluding sentence about the common characteristic
console.log("\nAny of these animals would make a great pet!");
