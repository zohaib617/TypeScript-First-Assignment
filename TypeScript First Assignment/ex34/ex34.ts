let commonAnimals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Print the names of each animal using a for loop
console.log("Names of common animals:");
for (let animal of commonAnimals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nStatements about each animal:");
for (let animal of commonAnimals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a concluding sentence about the common characteristic
console.log("\nAny of these animals would make a great pet!");
