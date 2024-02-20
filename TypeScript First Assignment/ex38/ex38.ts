function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with different city-country pairs
let location1 = cityCountry('Karachi', 'Pakistan');
let location2 = cityCountry('Paris', 'France');
let location3 = cityCountry('New York', 'USA');

// Print the values returned by the function
console.log(location1);
console.log(location2);
console.log(location3);
