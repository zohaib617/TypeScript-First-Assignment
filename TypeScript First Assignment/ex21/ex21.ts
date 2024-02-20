// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];

// Intentionally accessing an out-of-bounds index to cause an error
let invalidIndex: number = 10;
let result: number;

try {
    result = numbers[invalidIndex];
    console.log(`Value at index ${invalidIndex}: ${result}`);
} catch (error) {
    console.error("Error:", error.message);
}

// Correct the error by accessing a valid index
let validIndex: number = 2;
let correctedResult: number = numbers[validIndex];
console.log(`Value at index ${validIndex}`);
