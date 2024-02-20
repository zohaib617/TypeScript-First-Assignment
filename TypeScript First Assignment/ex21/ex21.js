// Array of numbers
var numbers = [1, 2, 3, 4, 5];
// Intentionally accessing an out-of-bounds index to cause an error
var invalidIndex = 10;
var result;
try {
    result = numbers[invalidIndex];
    console.log("Value at index ".concat(invalidIndex, ": ").concat(result));
}
catch (error) {
    console.error("Error:", error.message);
}
// Correct the error by accessing a valid index
var validIndex = 2;
var correctedResult = numbers[validIndex];
console.log("Value at index ".concat(validIndex));
