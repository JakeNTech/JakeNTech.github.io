function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function TagLine(){
    newtext = "";
    switch (randomInteger(0,4)) {
        case 0:
            newtext = `They said to write somthing intresting about yourself...I couldn't think of anything...so here we are`
            break;
        case 1:
            newtext = `Owner of low milage duck...one less carful owner`
            break;
        case 2:
            newtext = `"<i>Jake Bullet, Cybernautic Detective. I like that!</i>" - Kryten, Red Dwarf`
            break;
        case 3:
            newtext = `Professional bad speller`
            break;
        case 4:
            newtext = `Aspiring Forensicator`
            break;
        default:
            newtext = `Hello!`
            break;
    }
    document.getElementById("tagline").innerHTML = newtext;
}
TagLine()