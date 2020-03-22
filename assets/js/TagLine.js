function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function hahahfunny(){
    var newtext = "";
    switch (getRndInteger(0,17)) {
        case 0:
            newtext = "I like computers!"
            break;
        case 1:
            newtext = "Error 418: I am a teapot!"
            break;
        case 2:
            newtext = "You can trust me I do computing!"
            break;
        case 3:
            newtext = "Have you tried turning it off and on again?"
            break;
        case 4:
            newtext = "I haven't been a health and safety hazard for a while now!"
            break;
        case 5:
            newtext = "Ducks!"
            break;
        case 6:
            newtext = "Why do things the easy way when you can do it the long and bizzare way?!"
            break;
        case 7:
            newtext = "Occasionally will do something mildly interesting"
            break;
        case 8:
            newtext = "I can't spell"
            break;
        case 9:
            newtext = "Tea for the win!"
            break;
        case 10:
            newtext = "I like Tomb Raider!"
            break;
        case 11:
            newtext = "Yes I do computing...no I will not fix your printer"
            break;
        case 12:
            newtext = "If you are still using XP please stop"
            break;
        case 13:
            newtext = "I might not be good at everything, but I am good at being bad at most things."
            break;
        case 14:
            newtext = "Danger Danger! I felt it!"
            break;
        case 15:
            newtext =  "Windows 8.1 is better then Windows 10 change my mind"
            break;
        case 16:
            newtext = "I'm going to turn petrol into dust and noise."
            break;
        default:
            newtext = "There should be a joke like line here! If it doesn't work I am sorry for any inconvenience."
            break;
    }
    document.getElementById("tagline").innerHTML = newtext;
}