function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function hahahfunny(){
    var newtext = "";
    switch (getRndInteger(0,11)) {
        case 0:
            newtext = "Error 418: I am a teapot!"
            break;
        case 1:
            newtext = "Have you tried turning it off and on again?"
            break;
        case 2:
            newtext = "I haven't been a health and safety hazard for a while now!"
            break;
        case 3:
            newtext = "Ducks!"
            break;
        case 4:
            newtext = "Why do things the easy way when you can do it the long and bizzare way?!"
            break;
        case 5:
            newtext = "Computers are cool"
            break;
        case 6:
            newtext = "Professional bad speller"
            break;
        case 7:
            newtext = "No I will not fix your printer"
            break;
        case 8:
            newtext = "Forensicator"
            break;
        case 9:
            newtext = "I'm going to turn petrol into dust and noise. - Richard Hammond"
            break;
        case 10:
            newtext = "They said to write somthing intresting about yourself...I couldn't think of anything...so here we are"
            break;
        default:
            newtext = "Hello!"
            break;
    }
    document.getElementById("tagline").innerHTML = newtext;
}
hahahfunny()