function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    // Create a new array with modified magician names
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
// Array of magician's names
var magicianNames = ['Merlin', 'Houdini', 'David Copperfield', 'Penn & Teller'];
// Call makeGreat to modify the array and then showMagicians to display the modified list
var greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians);
