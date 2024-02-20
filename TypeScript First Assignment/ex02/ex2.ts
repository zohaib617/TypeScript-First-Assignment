function toTitleCase(input: string): string {
    return input.toLowerCase().replace(/(^|\s)\S/g, char => char.toUpperCase());
}

let personName: string="zohaib shah";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", toTitleCase(personName));
