var favoritePizzas = ['Margherita', 'Pepperoni', 'Vegetarian'];
// Print the names of each pizza using a for loop
console.log("Names of favorite pizzas:");
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var pizza = favoritePizzas_1[_i];
    console.log(pizza);
}
// Print a sentence for each pizza using the name
console.log("\nSentences about favorite pizzas:");
for (var _a = 0, favoritePizzas_2 = favoritePizzas; _a < favoritePizzas_2.length; _a++) {
    var pizza = favoritePizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Print a concluding sentence about your love for pizza
console.log("\nI really love pizza!");
