

// stating the computer will pick from the abc list and console.log works
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(computerChoices);
// records the wins losses guesses and what user chose
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessSofar = [];
var userGuess = document.onkeyup;
// how the computer will pick a letter console.log works

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("This is what the computer chose", computerGuess);


// when the user presses a key console.log works
document.onkeyup = function (event) {
    console.log("Recorded on key up ", event.key);

    // user pressed key is now the userGuess
    userGuess = event.key;

    // pushes the userGuess to the end of guessSofar array
    guessSofar.push(userGuess);

    // addes wins then resets guesses so far to blank and guesses left if user guesses what computer has chose
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        guessSofar = [];
    }

    // takes away from guesses left if the user guesses wrong
    if (userGuess !== computerGuess) {
        guessesLeft--;
    }

    // if guesses left equals 0 then adds to losses, resets guesses left, resets guesses so far
    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        guessSofar = [];
    }

    //  records all wins, losses, guesses left, and guesses so far into a variable html
    var html =
        "<p>Wins: " + wins + " </p>" +
        "<p>Losses: " + losses + " </p>" +
        "<p>Guesses Left: " + guessesLeft + " </p>" +
        "<p>Your Guesses So Far: " + guessSofar + " </p>";

    // reads the document for gamejs which is the div in index.html and replaces it with variable html
    document.getElementById("gamejs").innerHTML = html;
}

