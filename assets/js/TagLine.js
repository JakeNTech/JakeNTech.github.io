function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function hahahfunny(){
    newtext = "";
    switch (getRndInteger(0,10)) {
        case 0:
            newtext = `Harry Potter Fan`
            break;
        case 1:
            newtext = `<i>"Have you tried turning it off and on again?"</i>`
            break;
        case 2:
            newtext = `I haven't been a health and safety hazard for a while now!`
            break;
        case 3:
            newtext = `Ducks!`
            break;
        case 4:
            newtext = `Why do things the easy way when you can do it the long and bizzare way?!`
            break;
        case 5:
            newtext = `Computers are cool`
            break;
        case 6:
            newtext = `Professional bad speller`
            break;
        case 8:
            newtext = `Aspiring Forensicator`
            break;
        case 9:
            newtext = `I'm going to turn petrol into dust and noise. - Richard Hammond`
            break;
        case 10:
            newtext = `They said to write somthing intresting about yourself...I couldn't think of anything...so here we are`4
            break;
        default:
            newtext = `Hello!`
            break;
    }
    document.getElementById("tagline").innerHTML = newtext;
}
hahahfunny()