function nameWhat() {
    var name = prompt("What's your name?")
    alert(`Hello ${name}!`)
    return name
}
function convert() {
    var pick = prompt(`Would you like to convert Fº to Cº type "F". If you would like to convert Cº to Fº type "C".`)
    return pick
}
function numberout() {
    var numout = Number(prompt("What is the tempature outside?"))
    return numout
}
function faren(numout) {
    
    tempo2 = (numout - 32) * 5 / 9 
    var h = alert(`Your temp in F is ${numout} and in C it is ${tempo2}`) 
    return h
}
function celc(numout) {    
    celc2 = numout  * 9 / 5 + 32
    var c = alert(`Your temp in F is ${numout} and in celcius its ${celc2}`)
    return c    
}
nameWhat() 
if (convert() == "F") {
    faren(numberout())
}else {
    celc(numberout())
}