function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function whereIsThatBoi(){
    var findme ="";
    switch (getRndInteger(0,56)) {
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
        case 4:
            findme = "London Luton airport what?!"
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
            findme = "London M4(E)"
            break;
        case 10:
            findme = "Sleaford A1121 (A17)"
            break;
        case 11:
            findme = "Town Center All main routes A16 (A52, A1121)"
            break;
        case 12:
            findme = "Sleaford A17 Quadring Eaudike"
            break;
        case 13:
            findme = "Swindon Oxford A420"
            break;
        case 14:
            findme ="The NORTH(A1) Sleaford A15 Wisbeach(A47) Leicester(A47) Spalding(A16)"
            break;
        case 15:
            findme = "Peterbourough(A15) Wisbeach (A47) Eastern Industry"
            break;
        case 16:
            findme = "Perry Grafham B661 Kimbolton(B645)"
            break;
        case 17:
            findme = "Scotch Corner Richmond A6055 (A6108) Brough Penrith A66"
            break;
        case 18:
            findme = "Carlisle M6(N) Preston Kendal M6(S)"
            break;
        case 19:
            findme = "Ullswater Staintion A592"
            break;
        case 20:
            findme = "Blandford A350"
            break;
        case 21:
            findme = "Newbury Basingstoke A303 (M3)"
            break;
        case 22:
            findme = "Aylesbury, Bicester A41"
            break;
        case 23:
            findme = "Whitby A169"
            break;
        case 24:
            findme = "Humber Br Lincoln A15"
            break;
        case 25:
            findme = "Humber Br. (Toll) Lincoln A15"
            break;
        case 26:
            findme = "(M40, M4) Heathrow ✈ M25"
            break;
        case 27:
            findme = "A30 London (W) Hounslow Staines"
            break;
        case 28:
            findme = "(M25(S)) Bagshot Egham A30 Wraysbury B376"
            break;
        case 29:
            findme = "Winsor A308 Legoland"
            break;
        case 30:
            findme = "Ascot Bracknell B3022 (A332) (M3) (M4) Alternative Route"
            break;
        case 31:
            findme = "Fifield Winkfield B3022"
            break;
        case 32:
            findme = "London Reading M4 A308(M) Oxford A404(M)"
            break;
        case 33:
            findme = "Richmond A6055 (A6108) Brough Penrith A66"
            break;
        case 34:
            findme = "Carmarthen Caerfyrddin M4"
            break;
        case 35:
            findme = "A380 Torquay Plymouth A38"
            break;
        case 36:
            findme = "A1139 Peterbourough,Wisbeach (A47) A605 N'hampton, Oundle"
            break;
        case 37:
            findme = "A1 London (N&C) A1(M) Hatfeild A1081 Barnet Services"
            break;
        case 38:
            findme = "Liskeard A38 Saltash (B3271)"
            break;
        case 39:
            findme = "Saltash Liskeard Cornwall A38"
            break;
        case 40:
            findme = "The NORTH, Bedford, M.Keynes M1"
            break;
        case 41:
            findme = "Newmarket Cambridge A1303 Burwell (B1102)"
            break;
        case 42:
            findme = "Grantham Gt. Gonerby Downtown B1174 Allington"
            break;
        case 43:
            findme = "The SOUTH Stamford A1"
            break;
        case 44:
            findme = "The NORTH (A1) Wetherby M1 York (A64)"
            break;
        case 45:
            findme = "The NORTH Wetherby A1(M) Manchester Leeds (M62)"
            break;
        case 46:
            findme = "Diss A143 Bury St Ed's A1302"
            break;
        case 47:
            findme = "Thetford A134 Diss (A143) Gt. Barton Sugar Factory"
            break;
        case 48:
            findme = "Southampton Bournemouth Portsmouth M3"
            break;
        case 49:
            findme = "M27 WEST So'ton Docks Bournemouth"
            break;
        case 50:
            findme = "(A5)(A4146) Aylesbury Dunstable Bletchly Park Stadium MK";
            break;
        case 51:
            findme = "Warwick A429";
            break;
        case 52:
            findme = "Lowerstoft (A47)"
            break;
        case 53:
            findme = "Gt. Yarmouth A47 Norwich A47"
            break;
        case 54:
            findme = "Sleaford Woodhall Spa (B1192) Tattershall Billinghay"
            break;
        case 55:
            findme = "M45 Coventry (S)"
            break;
        case 56:
            findme = "WOBBLY WHEEL Taunton, Honiton, Exeter & ✈ (M5) Okehampton (A30 West)"
            break;
        default:
            findme = "Lost"
            break;
            //If you can't tell from all of the above I really like driving!
    }
    document.getElementById("top_secret_location").innerHTML = findme;
}
whereIsThatBoi()