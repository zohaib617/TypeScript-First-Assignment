interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: string | number; // Allow additional key-value pairs
}

function storeCarInfo(manufacturer: string, modelName: string, ...details: [string, string | number][]): Car {
    let carInfo: Car = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Add additional details to the carInfo object
    for (let [key, value] of details) {
        carInfo[key] = value;
    }

    return carInfo;
}

// Call the function with required information and additional details
let car1 = storeCarInfo('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
let car2 = storeCarInfo('Honda', 'Civic', ['color', 'red'], ['optionalFeature', 'sunroof']);


// Print the returned objects to verify information
console.log(car1);
console.log(car2);
