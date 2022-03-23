function nameWhat(){
    var name = prompt("What's your name?")
    alert(`Hello ${name}!`)
    return name
}




function convert(){
    var pick = prompt(`Would you like to convert Fº to Cº type "F". If you would like to convert Cº to Fº type "C".`)
    return pick
}

function faren(pick){
    if (convert() == "F"){
        var tempo1 = Number(prompt("What is the tempature out side in FARENHEIGHT?!"))
        tempo2 = (tempo1 - 32) * 5 /9
        var h = alert(`Your temp is F is ${pick} and in C it is ${tempo2}`) 
        return h
    }
}

nameWhat()  , faren()