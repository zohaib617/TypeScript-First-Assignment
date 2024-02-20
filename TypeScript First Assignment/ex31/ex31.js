var current_users = ['admin', 'Eric', 'Alice', 'Bob', 'John'];
var new_users = ['john', 'Jane', 'Alice', 'Sam', 'Chris'];
// Convert all current users to lowercase for case-insensitive comparison
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var new_user_lower = new_user.toLowerCase();
    if (current_users_lower.indexOf(new_user_lower) !== -1) {
        console.log("Sorry, the username '".concat(new_user, "' is not available. Please choose a different one."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_user, "' is available."));
        current_users.push(new_user);
        current_users_lower.push(new_user_lower);
    }
}
