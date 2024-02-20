
let guestList: string[] = ["Osman","Ertural","Orhaan"];



console.log("Good news! We found a bigger dinner table.");

// Update Guest List

guestList.unshift("Shaikh Adabali");
guestList.splice(Math.floor(guestList.length / 2), 0,"Balaa Khatoon");
guestList.push("Alludeen");


for (let i = 0; i< guestList.length; i ++) {
    console.log(`Dear ${guestList[i]},\nYou are invite to dinner, we would be honored have you join us.`);
}