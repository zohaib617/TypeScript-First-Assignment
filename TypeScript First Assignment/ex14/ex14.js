var guestList = ["Osman", "Ertural", "Orhaan"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",\nYou are invite to dinner. we would be honored to have you join us. "));
}
var guestListUnbleToAttend = "Orhaan";
console.log("Unfortunately, ".concat(guestListUnbleToAttend, " cant't make it to dinner. "));
var newGuest = "Turgut Sardar";
guestList[guestList.indexOf(guestListUnbleToAttend)] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",\nYou are invite to dinner. we would honored to have join us."));
}
