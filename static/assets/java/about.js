var locations = {
    //Number:Location
    1:"So'ton Docks Bournemouth M27 WEST",
    2:"Bournemouth & ✈️ Christchurch A338",
    3:"The SOUTH WEST Poole, Wimborne A31",
    4:"Christchurch Hurn Parley Bournemouth International Airport B3073",
    5:"The NORTH Luton ✈️ M1",
    6:"A1139 A605 Peterborough, Wisbech (A47) N'hampton, Oundle",
    7:"St Pancras International",
    8:"This station is Bank. Change here for the DLR, Waterloo and City, Circle, Central and District lines",
    9:"M23(S) Brighton Crawley Gatwick ✈️",
    10:"M25 (M4, M40, M1) Heathrow ✈️ Watford, Staines",
    11:"This is a South Western Railway Service to London Waterloo",
    12:"(M2) Canterbury A2 Non-motorway traffic",
    13:"(M40, M4) Heathrow ✈️ M25",
    14:"London (C & W) A1",
    15:"Margate Ramsgate A299",
    16:"Canterbury A291 Herne Bay"
}
// var dad_jokes = {
//     1:"How much does a chimney cost? It's free, it's on the house"
// }

function location_joke_selector() {  
    document.getElementById("this_location").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="color:#e5559b;padding-right:1rem;" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>`+locations[Math.floor((Math.random()*16)+1)]+"</span>"
}
