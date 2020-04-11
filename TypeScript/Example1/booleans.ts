var isNew: boolean = false
var havePrinter: boolean = true

var pierre = "pierre"
var pierre2 = "pierre"

var acceptDiscount: boolean = (15 + 19 == 33)
var equalName: boolean = (pierre == pierre2)

console.log("They have the same names: ", equalName)
console.log("This boolean is: ", acceptDiscount)

// && all is true
var areTheTwo: boolean = acceptDiscount && equalName
console.log("Both are true: ", areTheTwo)

// || one is true
var areTheTwo2: boolean = acceptDiscount || equalName
console.log("One are true: ", areTheTwo2)


var listNumber1: number = 100
var listNumber2: number = 200

// != Diferent - not' some
var someList: boolean = (listNumber1 != listNumber2)
console.log("List a some", someList)