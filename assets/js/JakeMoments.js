function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function durr(){
    saying = "";
    switch (getRndInteger(0,15)) {
        case 0:
            saying = "Does the mouse mat you have turn on?"
            break;
        case 1:
            saying ="He's more socialer er er socialer socialer than me"
            break;
        case 2:
            saying = "I spelt 'face palm' as in 'palm' tree"
            break;
        case 3:
            saying = "Wireless logitech mouse mat"
            break;
        case 4:
            saying = "My dad just paid off the mortgage on our garge"
            break;
        case 5:
            saying = "I spelt 'rewind' 're-wind'";
            break;
        case 6:
            saying = "That's a bad person does"
            break;
        case 7:
            saying = "Could be a photo about."
            break;
        case 8:
            saying = "Someone: 'Nice Socks'. Me: 'You're welcome'"
            break;
        case 9:
            saying = "Have 'a' spaghetti"
            break;
        case 10:
            saying = "To launch missiles from a submarine you have to use twitter"
            break;
        case 11:
            saying = "Chippy is the new Microsoft Mascot"
            break;
        case 12:
            saying = "Blurgh"
            break;
        case 13:
            saying = "'uh-guh-huh' (ugh)"
            break;
        case 14:
            saying = "When the doorbell rings I open the fridge"
            break;
        case 15:
            saying = "Is a single strand of spaghetti a 'spaghet'?"
            break;
    }
    document.getElementById("sayings").innerHTML = "<i>"+saying+"</i>";
}
durr();