function assign() {
    //// Assigning the user's nation according to their eastern zodiac
    // Retrieving the zodiac
    var eastern = document.getElementById("eastern-zodiac");
    var easternZodiac = eastern.options[eastern.selectedIndex].value;

    // Look-up table
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

    // Assigning nation
    var nation = nationTable[easternZodiac];

    //// Assigning the user's nation according to their eastern zodiac
    // Retrieving Western Star Sign
    var astrological = document.getElementById("star-sign");
    var astrologicalSign = astrological.options[astrological.selectedIndex].value;

    // Look-up table
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
        "gemini"      : "Fire",
        "libra"       : "Fire",
        "aquarius"    : "Fire"
    }

    // Categorising
    var modifier = modifierTable[astrologicalSign];

    /// Combining it all
    // Look-up table
    const combination = {
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

    var bendingType = combination[nation][modifier];

    document.getElementById("results").innerHTML = "You are a " + bendingType + "!";
    console.log(combination[nation][modifier]);
}
