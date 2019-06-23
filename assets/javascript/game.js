

// this game does not work o_O

// records the wins losses guesses and what user chose
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessSofar = [];
// console.log the above and they work
// console.log(guessesLeft--);

        // should record wins and losses
        document.getElementById("win1").innerHTML = wins;
        document.getElementById("lose2").innerHTML = losses;
        document.getElementById("guess3").innerHTML = guessesLeft;
        document.getElementById("guess4").innerHTML = guessSofar;


// stating the computer will pick from the abc list and console.log works
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(computerChoices);

// how the computer will pick a letter console.log works
 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 console.log("This is what the computer chose", computerGuess);

// when the user presses a key console.log works
document.onkeyup = function (event) {
    console.log("Recorded on key up ", event.key);

    // what the user key is
    var userGuess = event.key;
    console.log("This is what the user chose ", userGuess);
    // if (userGuess === "a") {
        // this is section is needed to grab from the html id and add plus 1 to the wins
        // document.getElementById("win1").innerHTML = wins + 1;
        // console.log(wins++);
    
        if (userGuess === computerGuess) {
        document.getElementById("win1").innerHTML = wins + 1;

    }

        if (userGuess !== computerGuess) {
            
            document.getElementById("guess3").innerHTML = guessesLeft - 1;
            console.log(guessesLeft--);
            guessSofar.push(userGuess);
            document.getElementById("guess4").innerHTML = guessSofar;
        }
        if (guessesLeft === 0) {
            guessesLeft = 0;
            document.getElementById("lose2").innerHTML = losses + 1;
            document.getElementById("guess3").innerHTML = 9;
            document.getElementById("guess4").innerHTML = [];
        }

        // if (guessesLeft === 0) {
        //     guessesLeft = 9;
        //     guessSofar = [];
        // }
        
// }

    // if the user guess is the computer guess then a win counter is added
    // guesses left is reset to 9 and guesses so far is set to blank
    // if (userGuess === computerGuess) {
        // wins++;
        // guessesLeft = 9;
        // guessSofar = [];
    // }

    // if the user guess does not equal the computer guess the a guesses left is subtracted
    // the guess is added to guesses so far
    // if (userGuess !== computerGuess) {
        // guessesLeft--;
        // 
        // losses++;
    // }
    // if the guesses left is 0 then the losses is added, guesses so far reset, and guesses left set to 9
    // if (guessesLeft === 0) {
        // losses++;
        // guessSofar = [];
        // guessesLeft = 9;
    // }

}

