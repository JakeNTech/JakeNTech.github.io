function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function hahahfunny(){
    var newtext = "";
    switch (getRndInteger(0,9)) {
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
            newtext = "Occasionally will do something mildly interesting"
            break;
        case 6:
            newtext = "I can't spell"
            break;
        case 7:
            newtext = "Yes I do computing...no I will not fix your printer"
            break;
        case 8:
            newtext = "If you are still using Windows XP please stop"
            break;
        case 9:
            newtext = "I'm going to turn petrol into dust and noise."
            break;
        default:
            newtext = "There should be a joke like line here! If it doesn't work I am sorry for any inconvenience."
            break;
    }
    document.getElementById("tagline").innerHTML = newtext;
}
hahahfunny()