function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    // Create a copy of the original array
    let originalMagicians: string[] = magicians.slice();

    // Modify the copy by adding "the Great" to each magician's name
    let greatMagicians: string[] = [];
    for (let magician of originalMagicians) {
        greatMagicians.push(`the Great ${magician}`);
    }

    return greatMagicians;
}

// Array of magician's names
let magicianNames: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Penn & Teller'];

// Call makeGreat with a copy of the array and then showMagicians to display both lists
let greatMagicians = makeGreat(magicianNames.slice());
showMagicians(magicianNames);  // Original list
showMagicians(greatMagicians);  // Modified list
