function describeCity(city: string, country: string = 'Default Country'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describeCity('Karachi', 'Pakistan');
describeCity('Paris'); // Uses the default country value
describeCity('New York', 'USA');
