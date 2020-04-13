var isNew = false;
var havePrinter = true;
var pierre = "pierre";
var pierre2 = "pierre";
var acceptDiscount = (15 + 19 == 33);
var equalName = (pierre == pierre2);
console.log("They have the same names: ", equalName);
console.log("This boolean is: ", acceptDiscount);
// && all is true
var areTheTwo = acceptDiscount && equalName;
console.log("Both are true: ", areTheTwo);
// || one is true
var areTheTwo2 = acceptDiscount || equalName;
console.log("One are true: ", areTheTwo2);
var listNumber1 = 100;
var listNumber2 = 200;
// != Diferent - not' some
var someList = (listNumber1 != listNumber2);
console.log("List a some", someList);
