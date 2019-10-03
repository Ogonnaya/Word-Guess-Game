// words list
var femaleArtists = [
  "blondie",
  // "tina turner",
  // "stevie nicks",
  "sade",
  // "cyndi lauper",
  "madonna",
  // "pat benatar",
  // "janet jackson",
  "tiffany",
  // "paula abdul"
  "bananarama",
  "bangles",
  "eurythmics"
];

var wins = 0; // Number of wins start at 0 at the beginning of the game
var wrongGuesses = []; // Incorrectly guessed letters
var guessesLeft = 0; // Number of guesses remaining
var numGuesses = 8; // Total number of guesses
var answerBlanks = []; // Underscores shown for each letter to be guessed
var userGuesses = []; // Letters guessed by player
var randomWord; // Word that is currently being guessed
var gameFinished = false; // if true then restart game

// Start Game
function startGame() {
  // A random word is selected from the array of words
  randomWord = femaleArtists[Math.floor(Math.random() * femaleArtists.length)];
  console.log("Random word = " + randomWord);

  answerBlanks = [];

  //  ************ Game Loop *********************

  // The letters of the word should be replaced by underscores before the player guesses
  for (var i = 0; i < randomWord.length; i++) {
    answerBlanks[i] = "_";
    // console.log(i);

    // *** How do I create a space between words to show 2 words? ***
  }

  // Reset
  guessesLeft = numGuesses;
  userGuesses = [];
  wrongGuesses = [];

  //reset the selected elements on the screen
  resetScreen();
}

function resetScreen() {
  //The player should see how many guesses are remaining
  document.getElementById("win-number").innerHTML = wins;

  //The player should see total number of guesses reduced by 1
  document.getElementById("guesses-left").innerHTML = guessesLeft;

  //The player should see underscores for every letter of the word to be guessed
  document.getElementById("word-guess").innerHTML = answerBlanks.join(" ");

  //The letters guessed by the player will be shown in the incorrect letter area
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses;

  document.getElementById("user-message").innerHTML =
    "Press any letter, start guessing!";
}

function letterGuessed(letter) {
  //if letter is not in userGuesses array then push the letter to the array
  if (userGuesses.indexOf(letter) === -1) {
    userGuesses.push(letter);

    //if the letter is not in the current word then  subtract 1 from the guessesLeft
    if (randomWord.indexOf(letter) === -1) {
      guessesLeft--;
      wrongGuesses.push(letter);
      console.log(wrongGuesses);
    } else {
      //when the player guessed the correct letter, replace corresponding blank with letter
      for (var i = 0; i < randomWord.length; i++) {
        if (letter === randomWord[i]) {
          answerBlanks[i] = letter;
        }
      }
    }
  }
}
// ***************** End Game **********************

// When the player presses a key
document.onkeyup = function(event) {
  //if gameFinished is true then restart the game to the initial startGame
  //and switch gameFinished back to false
  if (gameFinished) {
    startGame();
    gameFinished = false;
  } else {
    //check to see if only letters A-Z are pressed
    //functions will be executed when the user presses only A-Z key
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      letterGuessed(event.key);
      resetScreen();
      playerWins();
      playerLoses();
    }
  }
};

// Player wins
function playerWins() {
  // if player guesses the word increase wins by 1, show you win alert, give new word to guess
  if (answerBlanks.indexOf("_") === -1) {
    wins++;
    gameFinished = true;
    document.getElementById("user-message").innerHTML =
      "You Win!! " + "Press any key to try again!";
    // *** How do I get the alert to show after 0? ****
    // alert("You win! Here's another word to guess!");
  }
}
// Player loses
function playerLoses() {
  // if player runs of of guesses show you lose alert, give new word to guess, reset guesses and incorrect letters
  if (guessesLeft === 0) {
    gameFinished = true;
    document.getElementById("user-message").innerHTML =
      "The word was " + randomWord + "." + " Press any key to try again!";
    // *** How do I get the alert to show after 0? ****
    // alert("The word was " + randomWord + "." + " Try another word!");
  }
}

startGame();
resetScreen();
