var usernames = ['admin', 'Eric', 'Shah', 'Zohaib', 'Kamran'];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
// Remove all usernames
usernames = [];
// Check for an empty list
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _a = 0, usernames_2 = usernames; _a < usernames_2.length; _a++) {
        var username = usernames_2[_a];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
