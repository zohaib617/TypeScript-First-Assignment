function toTitleCase(input) {
    return input.toLowerCase().replace(/(^|\s)\S/g, function (char) { return char.toUpperCase(); });
}
var personName = "zohaib shah";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", toTitleCase(personName));
