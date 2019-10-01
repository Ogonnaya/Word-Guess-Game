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
// var loss = 0; // Number of losses start at 0 at the beginning of the game
var wrongLetter = []; // Incorrectly guessed letters
var guessesLeft = 0; // Number of guesses remaining
var answerBlanks = []; // Dashes shown for each letter to be guessed
var userGuesses = [];
var randomWord = [];
var winCounter = 0;

function startGame() {
  // A random word is selected from the array of words
  randomWord = femaleArtists[Math.floor(Math.random() * femaleArtists.length)];
  console.log("Random word = " + randomWord);

  // The player should see dashes for each letter to be guesses
  for (var i = 0; i < randomWord.length; i++) {
    // console.log(i);
    answerBlanks[i] = "_";
    console.log(answerBlanks);
  }

  guessesLeft = femaleArtists.length;

  //  ************ GAME LOOP *********************

  document.getElementById("word-guess").innerHTML = answerBlanks.join(" ");

  //Reset
  wrongLetter = [];
  guessesLeft = 8;

  //The player should see how many guesses are remaining
  document.getElementById("win-number").innerHTML = wins;

  // document.getElementById("wrong-guesses").textContent = userGuesses;

  //The player should see total number of guesses are remaining
  document.getElementById("guesses-left").innerHTML = guessesLeft;

  // When the player presses a key:
  document.onkeyup = function(event) {
    userGuesses = event.key;
    console.log(userGuesses);

    if (randomWord.indexOf(userGuesses) > -1) {
      console.log("yes");
      for (var j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === userGuesses) {
          answerBlanks[j] = userGuesses;
        }
        console.log(answerBlanks);
        document.getElementById("word-guess").innerHTML = answerBlanks.join(
          " "
        );
        // winCounter++;
        // winLose();
      }
    } else {
      wrongLetter.push(userGuesses);
      console.log(wrongLetter);
      guessesLeft--;
      console.log(guessesLeft);

      //The letters guessed by the player will be shown in the incorrect letter area
      document.getElementById("wrong-guesses").textContent = wrongLetter;

      //The player should see total number of guesses reduced by 1
      document.getElementById("guesses-left").innerHTML = guessesLeft;
      // winLose();
    }
  };
}

startGame();

//  // If the player guess all the letters correctly:
//  if (wins === randomWord.length) {
//   alert("Winner");
// } else if (userGuesses === 0) {
//   alert("Loser)");
// }

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

// function winLose() {
//   if (winCounter === randomWord.length) {
//     alert("Winner");
//   }
//   //   } else if (userGuesses === 0) {
//   //     alert("Loser)");
//   //   }
// }
