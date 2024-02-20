// Alien Colors #3
let alien_color: string = 'red';

if (alien_color === 'green') {
    console.log("Player earned 5 points for shooting the green alien!");
} else if (alien_color === 'yellow') {
    console.log("Player earned 10 points for shooting the yellow alien!");
} else if (alien_color === 'red') {
    console.log("Player earned 15 points for shooting the red alien!");
} else {
    console.log("Invalid alien color!"); // Optional: Handle other colors or unexpected values
}
