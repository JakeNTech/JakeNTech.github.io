function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function TopSecretLocationFinder(){
    var findme ="";
    switch (randomInteger(0,12)) {
        case 0:
            findme = "London Huntington A1(M)"
            break;
        case 1:
            findme = "London (City & West) A1(M)"
            break;
        case 2:
            findme = "M25 (M40, M1), Watford (M3,M23) Gatwick ✈ Heathrow ✈ (Term 4,5 & Cargo)"
            break;
        case 3:
            findme = "Perry Grafham B661 Kimbolton(B645)"
            break;
        case 4:
            findme = "(M25(S)) Bagshot Egham A30 Wraysbury B376"
            break;
        case 5:
            findme = "Ascot Bracknell B3022 (A332) (M3) (M4) Alternative Route"
            break;
        case 6:
            findme = "London Reading M4 A308(M) Oxford A404(M)"
            break;
        case 7:
            findme = "A1 London (N&C) A1(M) Hatfeild A1081 Barnet Services"
            break;
        case 8:
            findme = "The NORTH, Bedford, M.Keynes M1"
            break;
        case 9:
            findme = "Grantham Gt. Gonerby Downtown B1174 Allington"
            break;
        case 10:
            findme = "The SOUTH Stamford A1"
            break;
        case 11:
            findme = "Southampton Bournemouth Portsmouth M3"
            break;
        case 12:
            findme = "M27 WEST So'ton Docks Bournemouth"
            break;
        default:
            findme = "Lost"
            break;
    }
    document.getElementById("top_secret_location").innerHTML = findme;
}
TopSecretLocationFinder()