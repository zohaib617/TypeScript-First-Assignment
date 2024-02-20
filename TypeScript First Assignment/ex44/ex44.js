function storeCarInfo(manufacturer, modelName) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Add additional details to the carInfo object
    for (var _a = 0, details_1 = details; _a < details_1.length; _a++) {
        var _b = details_1[_a], key = _b[0], value = _b[1];
        carInfo[key] = value;
    }
    return carInfo;
}
// Call the function with required information and additional details
var car1 = storeCarInfo('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
var car2 = storeCarInfo('Honda', 'Civic', ['color', 'red'], ['optionalFeature', 'sunroof']);
// Print the returned objects to verify information
console.log(car1);
console.log(car2);
