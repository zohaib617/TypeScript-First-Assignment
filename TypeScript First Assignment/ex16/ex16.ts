


let guestList: string[] = ["Osman", "Erturl", "Orhaan", "Turgut Sardaar", "Shaikh Adabali", "Bala Khatoon","Alludeen"];

console.log("Unfortunately, the new dinner table won't arrive in time, and we can invite only two people.");

// Remove guests until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);

}

for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are still invited to dinner, we apologize for any inconvenience.`);
    

    // remove the last two name from the list to have an empty list
    guestList.splice(0, 2);

    //print the empty list
    console.log("Guest List After Removing All Guest:", guestList);
}