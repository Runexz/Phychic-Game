
// console.log(5 + 6);



// Maybe use this to record wins etc?
// document.write("Wins:<br/>");
// document.write("Losses:<br/>");
// document.write("Guesses Left:<br/>");
// document.write("Your Guesses so far:<br/>");

// records the wins losses guesses and what user chose
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessSofar = [];

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.getElementById("win1").innerHTML=wins;
document.getElementById("lose2").innerHTML=losses;
document.getElementById("guess3").innerHTML=guessesLeft;
document.getElementById("guess4").innerHTML=guessSofar.join('');

// how the computer will pick a letter
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//I dont think i need this?
// var i = 10
// for (i=10; i>0; i--) {
// console.log(i);
// }


// when the user presses a key
document.onkeyup = function(event) {
    guessSofar++;
    guessesLeft--
    var userGuess = event.key;
    
    if (userGuess === computerGuess) {
        wins++;
    }

    else {
        losses++;
    }

}

