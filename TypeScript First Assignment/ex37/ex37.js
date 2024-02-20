function describeCity(city, country) {
    if (country === void 0) { country = 'Default Country'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describeCity('Karachi', 'Pakistan');
describeCity('Paris'); // Uses the default country value
describeCity('New York', 'USA');
