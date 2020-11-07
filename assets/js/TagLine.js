function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function TagLine(){
    newtext = "";
    switch (randomInteger(0,3)) {
        case 0:
            newtext = `Owner of low milage duck`
            break;
        case 1:
            newtext = `"<i>Jake Bullet, Cybernautic Detective. I like that!</i>" - Kryten, Red Dwarf`
            break;
        case 2:
            newtext = `Professional bad speller`
            break;
        case 3:
            newtext = `Not particularly intresting`
            break;
        default:
            newtext = `Hello!`
            break;
    }
    document.getElementById("tagline").innerHTML = newtext;
}
TagLine()