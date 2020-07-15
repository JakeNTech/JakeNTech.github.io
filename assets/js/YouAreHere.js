function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function whereAmI(){
    var findme ="";
    switch (getRndInteger(0,33)) {
        case 0:
            findme = "The SOUTH A1"
            break;
        case 1:
            findme = "London Huntington A1(M)"
            break;
        case 2:
            findme = "London (City & West) A1(M)"
            break;
        case 3:
            findme = "Cambridge Bedford A421"
            break;
        case 5:
            findme = "Boston A16"
            break;
        case 6:
            findme = "52.087824, -0.343716"
            break;
        case 7:
            findme = "London Aylesbury M40 Newbury Oxford A34"
            break;
        case 8:
            findme = "M25 (M40, M1), Watford (M3,M23) Gatwick ✈ Heathrow ✈ (Term 4,5 & Cargo)"
            break;
        case 9:
            findme = "Town Center All main routes A16 (A52, A1121)"
            break;
        case 10:
            findme = "Sleaford A17 Quadring Eaudike"
            break;
        case 11:
            findme = "Swindon Oxford A420"
            break;
        case 12:
            findme ="The NORTH(A1) Sleaford A15 Wisbeach(A47) Leicester(A47) Spalding(A16)"
            break;
        case 13:
            findme = "Perry Grafham B661 Kimbolton(B645)"
            break;
        case 14:
            findme = "Scotch Corner Richmond A6055 (A6108) Brough Penrith A66"
            break;
        case 15:
            findme = "Ullswater Staintion A592"
            break;
        case 16:
            findme = "Blandford A350"
            break;
        case 17:
            findme = "(M40, M4) Heathrow ✈ M25"
            break;
        case 18:
            findme = "A30 London (W) Hounslow Staines"
            break;
        case 19:
            findme = "(M25(S)) Bagshot Egham A30 Wraysbury B376"
            break;
        case 20:
            findme = "Ascot Bracknell B3022 (A332) (M3) (M4) Alternative Route"
            break;
        case 21:
            findme = "London Reading M4 A308(M) Oxford A404(M)"
            break;
        case 22:
            findme = "Richmond A6055 (A6108) Brough Penrith A66"
            break;
        case 23:
            findme = "Carmarthen Caerfyrddin M4"
            break;
        case 24:
            findme = "A380 Torquay Plymouth A38"
            break;
        case 25:
            findme = "A1139 Peterbourough,Wisbeach (A47) A605 N'hampton, Oundle"
            break;
        case 26:
            findme = "A1 London (N&C) A1(M) Hatfeild A1081 Barnet Services"
            break;
        case 27:
            findme = "The NORTH, Bedford, M.Keynes M1"
            break;
        case 28:
            findme = "Grantham Gt. Gonerby Downtown B1174 Allington"
            break;
        case 29:
            findme = "The SOUTH Stamford A1"
            break;
        case 30:
            findme = "Thetford A134 Diss (A143) Gt. Barton Sugar Factory"
            break;
        case 31:
            findme = "Southampton Bournemouth Portsmouth M3"
            break;
        case 31:
            findme = "M27 WEST So'ton Docks Bournemouth"
            break;
        case 32:
            findme = "(A5)(A4146) Aylesbury Dunstable Bletchly Park Stadium MK"
            break;
        case 33:
            findme = "Sleaford Woodhall Spa (B1192) Tattershall Billinghay"
            break;
        default:
            findme = "Lost"
            break;
    }
    document.getElementById("top_secret_location").innerHTML = findme;
}
whereAmI()