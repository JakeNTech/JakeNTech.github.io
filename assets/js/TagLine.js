function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function hahahfunny(){
    newtext = "";
    switch (getRndInteger(0,6)) {
        case 0:
            newtext = `They said to write somthing intresting about yourself...I couldn't think of anything...so here we are`
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
            newtext = `Professional bad speller`
            break;
        case 6:
            newtext = `Aspiring Forensicator`
            break;
        default:
            newtext = `Hello!`
            break;
    }
    document.getElementById("tagline").innerHTML = newtext;
}
hahahfunny()