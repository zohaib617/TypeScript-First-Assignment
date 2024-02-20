let temperature = 28;
let dayOfWeek = 'Wednesday';
let isRaining = false;
let favoriteFruit = 'orange';
let userRole = 'admin';
let numbers = [1, 2, 3, 4, 5];

// Test 1
console.log("Is the temperature greater than 25 degrees? I predict True.");
console.log(temperature > 25);

// Test 2
console.log("Is it a weekend (Saturday or Sunday)? I predict False.");
console.log(dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday');

// Test 3
console.log("Is it raining? I predict False.");
console.log(isRaining);

// Test 4
console.log("Is the favorite fruit 'apple' or 'orange'? I predict True.");
console.log(favoriteFruit === 'apple' || favoriteFruit === 'orange');

// Test 5
console.log("Is the user's role 'admin'? I predict True.");
console.log(userRole === 'admin');

// Test 6
console.log("Is the temperature less than 20 or greater than 30? I predict False.");
console.log(temperature < 20 || temperature > 30);

// Test 7
console.log("Does the numbers array include 3? I predict True.");
console.log(numbers.indexOf(3) !== -1);

// Test 8
console.log("Is the day not equal to 'Monday'? I predict True.");
console.log(dayOfWeek !== 'Monday');

// Test 9
console.log("Is the favorite fruit 'banana' or 'grape'? I predict False.");
console.log(favoriteFruit === 'banana' || favoriteFruit === 'grape');

// Test 10
console.log("Is the user's role 'user'? I predict False.");
console.log(userRole === 'user');
