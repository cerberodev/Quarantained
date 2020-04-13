var ticketSold: number = 96
var soldOut: number = 100

if (ticketSold > 100) {
    console.log("Ticket Sold Out")
}
else {
    console.log("Ticket available: " + (soldOut - ticketSold))
}