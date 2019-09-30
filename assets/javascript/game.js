// Variables

var femaleArtists = [
  "blondie",
  "tina turner",
  "stevie nicks",
  "sade",
  "cyndi lauper",
  "madonna",
  "pat benatar",
  "janet jackson",
  "tiffany",
  "paula abdul"
];
console.log(femaleArtists);

var wins = 0; // Number of wins start at 0 at the beginning of the game
var loss = 0; // Number of losses start at 0 at the beginning of the game
var wrongGuessses = []; // Incorrectly guessed letters
var guessesLeft = 8; // Number of guesses remaining
var answerBlanks = []; // Dashes shown for each letter to be guessed
var userGuesses = [];

// A random word is selected from the array of words
var randomWord =
  femaleArtists[Math.floor(Math.random() * femaleArtists.length)];
console.log("Random word = " + randomWord);

// The player should see dashes for each letter to be guesses
for (var i = 0; i < randomWord.length; i++) {
  // console.log(i);
  answerBlanks[i] = "_";
  console.log(answerBlanks);
}

document.getElementById("word-guess").innerHTML = answerBlanks.join(" ");

//Reset
wrongLetter = [];
guessesLeft = 9;

//The player should see how many guesses are remaining
document.getElementById("guesses-left").innerHTML = guessesLeft;

// When the player presses a key:
document.onkeyup = function(event) {
  userGuesses = event.key;
  console.log(userGuesses);

  if (randomWord.indexOf(userGuesses) > -1) {
    console.log("yes");
  } else {
    wrongLetter.push(userGuesses);
    console.log(wrongLetter);
    guessesLeft--;
    console.log(guessesLeft);
  }
};

// - If the letter guesseed is correct
// - Replace corresponding dash with letter
//  Else
// - Show letter in incorrect guess area
// - Reduce the number of guess remaining by 1
// - Repeat If/Else until the player guesses the word or runs out of guesses

// If the player guess all the letters correctly:
// - Increase the number of wins by 1
// - Show you win messsage
// - Show play again button
// - If player clicks on button
// - show a random word with dashes on the sceenr for the playert to start guessing
// Else do nothing
// Else
// - Show you lose message
// - Show play again button
