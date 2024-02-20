function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    // Create a copy of the original array
    var originalMagicians = magicians.slice();
    // Modify the copy by adding "the Great" to each magician's name
    var greatMagicians = [];
    for (var _i = 0, originalMagicians_1 = originalMagicians; _i < originalMagicians_1.length; _i++) {
        var magician = originalMagicians_1[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
// Array of magician's names
var magicianNames = ['Merlin', 'Houdini', 'David Copperfield', 'Penn & Teller'];
// Call makeGreat with a copy of the array and then showMagicians to display both lists
var greatMagicians = makeGreat(magicianNames.slice());
showMagicians(magicianNames); // Original list
showMagicians(greatMagicians); // Modified list
