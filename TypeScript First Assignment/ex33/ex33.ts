let favoritePizzas: string[] = ['Margherita', 'Pepperoni', 'Vegetarian'];

// Print the names of each pizza using a for loop
console.log("Names of favorite pizzas:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

// Print a sentence for each pizza using the name
console.log("\nSentences about favorite pizzas:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Print a concluding sentence about your love for pizza
console.log("\nI really love pizza!");
