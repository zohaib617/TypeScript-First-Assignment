function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    // Create a new array with modified magician names
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}

// Array of magician's names
let magicianNames: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Penn & Teller'];

// Call makeGreat to modify the array and then showMagicians to display the modified list
let greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians);
