
let guestList: string[] = ["Osman","Ertural","Orhaan"];

for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are invite to dinner. we would be honored to have you join us. `);
}
let guestListUnbleToAttend: string ="Orhaan";
console.log(`Unfortunately, ${guestListUnbleToAttend} cant't make it to dinner. ` );

let newGuest: string = "Turgut Sardar";
guestList[guestList.indexOf(guestListUnbleToAttend)] = newGuest;

for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are invite to dinner. we would honored to have join us.`);
}
