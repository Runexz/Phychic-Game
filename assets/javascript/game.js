

// this game does not work o_O

// records the wins losses guesses and what user chose
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessSofar = [];

// should record wins and losses
document.getElementById("win1").innerHTML = wins;
document.getElementById("lose2").innerHTML = losses;
document.getElementById("guess3").innerHTML = guessesLeft;
document.getElementById("guess4").innerHTML = guessSofar;

// stating the computer will pick from the abc list and console.log works
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(computerChoices);

// when the user presses a key console.log works
document.onkeyup = function (event) {
    console.log(event.key);

    // what the user key is
    var userGuess = event.key;

    // how the computer will pick a letter console.log works
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("This is what the computer chose", computerGuess);

    // console.log(guessesLeft--);

    // if the user guess is the computer guess then a win counter is added
    // guesses left is reset to 9 and guesses so far is set to blank
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        guessSofar = [];
    }
    // if the user guess does not equal the computer guess the a guesses left is subtracted
    // the guess is added to guesses so far
    if (userGuess !== computerGuess) {
        guessesLeft--;
        guessSofar.push(userGuess);
        losses++;
    }
    // if the guesses left is 0 then the losses is added, guesses so far reset, and guesses left set to 9
    if (guessesLeft === 0) {
        losses++;
        guessSofar = [];
        guessesLeft = 9;
    }

}

