let current_users: string[] = ['admin', 'Eric', 'Alice', 'Bob', 'John'];
let new_users: string[] = ['john', 'Jane', 'Alice', 'Sam', 'Chris'];

// Convert all current users to lowercase for case-insensitive comparison
let current_users_lower: string[] = current_users.map(user => user.toLowerCase());

for (let new_user of new_users) {
    let new_user_lower: string = new_user.toLowerCase();

    if (current_users_lower.indexOf(new_user_lower) !== -1) {
        console.log(`Sorry, the username '${new_user}' is not available. Please choose a different one.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
        current_users.push(new_user);
        current_users_lower.push(new_user_lower);
    }
}
