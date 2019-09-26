// Array for words to guess
var femaleArtists = [
  "Blondie",
  "Tina Turner",
  "Stevie Nicks",
  "Sade",
  "Cyndi Lauper",
  "Madonna",
  "Pat Benatar",
  "Janet Jackson",
  "Tiffany",
  "Paula Abdul"
];

// Array for blanks
var blankArray = [];
for (var i = 0; i < femaleArtists.length; i++) {
  blankArray[i] = "_";
}

var remainingLetters = femaleArtists.length;
while (remainingLetters > 0) {}

document.getElementById("demo").innerHTML = "Word Guess Game";
