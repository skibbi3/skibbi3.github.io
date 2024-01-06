function assign() {
    // Assigning the user's nation according to their eastern zodiac
    var eastern = document.getElementById("eastern-zodiac");
    var easternZodiac = eastern.options[eastern.selectedIndex].value;

    const nationTable = {
        "rabbit" : "Water",
        "snake"  : "Water",
        "dog"    : "Water",
        "rat"    : "Earth",
        "ox"     : "Earth",
        "goat"   : "Earth",
        "dragon" : "Fire",
        "tiger"  : "Fire",
        "pig"    : "Fire",
        "rooster": "Air",
        "monkey" : "Air",
        "horse"  : "Air"
    }

    var nation = nationTable[easternZodiac];

    // Assigning the user's nation according to their eastern zodiac
    var astrological = document.getElementById("star-sign");
    var astrologicalSign = astrological.options[astrological.selectedIndex].value;

    const modifierTable = {
        "cancer"      : "Water",
        "pisces"      : "Water",
        "scorpio"     : "Water",
        "taurus"      : "Earth",
        "virgo"       : "Earth",
        "capricorn"   : "Earth",
        "aries"       : "Fire",
        "leo"         : "Fire",
        "sagittarius" : "Fire",
        "gemini"      : "Air",
        "libra"       : "Air",
        "aquarius"    : "Air"
    }

    var modifier = modifierTable[astrologicalSign];

    // Assigning a bending type
    const bendingTable = {
        "Water": {
            "Water": "Waterbender",
            "Earth": "Bloodbender",
            "Fire" : "Non bender - Wolf Warrior",
            "Air"  : "Healer"
        },
        "Earth": {
            "Earth": "Earthbender",
            "Water": "Metalbender",
            "Fire" : "Lavabender",
            "Air"  : "Non bender - Kyoshi Warrior",
        },
        "Fire": {
            "Fire" : "Firebender",
            "Water": "Lightningbender",
            "Earth": "Non bender - Sword Master",
            "Air"  : "Combustionbender"
        },
        "Air": {
            "Air"  : "Airbender",
            "Water": "Nonbender - Chi Blocker",
            "Earth": "Soundbender (astral projection)",
            "Fire" : "Flightbender"
        }
    }

    var bendingType = bendingTable[nation][modifier];

    // Flavour text and image
    const flavourText = {
        "Waterbender"                     : ["waterbender.webp", "Splish splash"],
        "Bloodbender"                     : ["bloodbender.webp", "Ouchie oof my blood"],
        "Non bender - Wolf Warrior"       : ["wolf_warrior.jpg", "It's not a pony tail, it's a warrior's wolf knot!"],
        "Healer"                          : ["healer.jpeg", "Ouchie oof my injuries"],
        "Earthbender"                     : ["earthbender.jpeg", "Take that, you rock!"],
        "Metalbender"                     : ["metalbender.jpg", "First, you bend the metal, then you get the medal."],
        "Lavabender"                      : ["lavabender.avif", "Hungry for the forbidden grilled cheese!"],
        "Non bender - Kyoshi Warrior"     : ["kyoshi_warrior.jpg", "Hey Sokka, nice dress!"],
        "Firebender"                      : ["firebender.webp", "Fire is life, not just destruction."],
        "Lightningbender"                 : ["lightningbender.jpg", "I'll show you lightning!"],
        "Non bender - Sword Master"       : ["swordmaster.webp", "The way of the sword does not belong to one particular nation."],
        "Combustionbender"                : ["combustionbender.webp", "Sparky sparky boom man!"],
        "Airbender"                       : ["airbender.jpg", "Woosh!"],
        "Nonbender - Chi Blocker"         : ["chi_blocker.jpg", "Weeee spin like the wind! Jab jab stab stab they fall over but they not dead!"],
        "Soundbender (astral projection)" : ["spiritbender.jpg", "Wild!"],
        "Flightbender"                    : ["flightbender.jpg", "Neither Zaheer not Zathere."]
    }

    // Displaying the results
    document.getElementById("results").style = {display: "block", border: 'thin solid black'}; // Border not quite right
    document.getElementById("bending_type").innerHTML = "You are a " + bendingType + "!";
    document.getElementById("bender_image").innerHTML = "<img src=\"img/" + flavourText[bendingType][0] + "\"></img>";
    document.getElementById("flavour_text").innerHTML = flavourText[bendingType][1];
}