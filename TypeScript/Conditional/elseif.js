var ticketSold = 25000;
var soldOut = 100000;
var discount1 = 25000;
var discount2 = 50000;
var discount3 = 75000;
if (ticketSold < discount1) {
    console.log("Your ticket aplicated a Discount of 50%");
}
else if (ticketSold >= discount1 && ticketSold <= discount2) {
    console.log("Your ticket aplicated a Discount of 25%");
}
else if (ticketSold >= discount2 && ticketSold <= discount3) {
    console.log("Your ticket aplicated a Discount of 10%");
}
else {
    console.log("Your ticket not aplicated a Discount");
}
