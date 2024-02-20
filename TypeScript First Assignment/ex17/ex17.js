var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of places to visit
var placesToVisit = ["Sudia Arab", "Pakistan", "Iran", "Plastine", "Turki"];
// Print array in its original order
console.log("Original order:", placesToVisit);
// Print array in alphabetical order without modifying the actual list
var alphabeticalOrder = __spreadArray([], placesToVisit, true).sort();
console.log("Alphabetical order:", alphabeticalOrder);
// Show that the original array is still in its original order
console.log("Original order (unchanged):", placesToVisit);
// Print array in reverse alphabetical order without changing the order of the original list
var reverseAlphabeticalOrder = __spreadArray([], placesToVisit, true).sort().reverse();
console.log("Reverse alphabetical order:", reverseAlphabeticalOrder);
// Show that the original array is still in its original order
console.log("Original order (unchanged):", placesToVisit);
// Reverse the order of the original list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// Reverse the order again to get back to the original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisit);
