

// records the wins losses guesses and what user chose
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessSofar = [];

// should record wins and losses
document.getElementById("win1").innerHTML=wins;
document.getElementById("lose2").innerHTML=losses;
document.getElementById("guess3").innerHTML=guessesLeft;
document.getElementById("guess4").innerHTML=guessSofar;

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    
    // when the user presses a key
    document.onkeyup = function(event) {
        console.log(event.key);
        
        var userGuess = event.key;
        // how the computer will pick a letter
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        guessSofar = [];
    }
    if (userGuess !== computerGuess) { 
        guessesLeft--;
        guessSofar.push(userGuess);
    }
    if (guessesLeft === 0) {
        losses++;
        guessSofar = [];
        guessesLeft = 9;
    }
    // losses++;
    // else { 
        // guessSofar.push(userGuess);
    // }
        
    

}

