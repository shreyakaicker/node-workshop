/*Number guessing game!
  * Create a file called `number-guessing-game.js`.
  * Instead of using `prompt` and `alert`, you will have to use 
  capabilities from NodeJS and any external module. **HINT**: 
  there is an npm library called `prompt` that can help you with that :)
 Generate a random number between 1 and 100. Using the browser functions
 prompt and alert, ask the user to guess the number. You should give them
 4 tries to guess the number. If they guess wrong, tell them if it's 
 higher or lower. If they guess right, congratulate them. Otherwise, 
 give them a message saying what the correct number was, as well as their 
 list of guesses.*/
 
 
var fs = require('fs'); 
var prompt = require('prompt'); 

var randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
var counter = 3;

function guessNumber(number){
prompt.get('enterGuess', function(err, answers) {
    
    if (err) {
        console.log('there was an error');
    }
    else {
        if(Number(answers.enterGuess) === randomNumber){
        console.log("correct guess");}
       else if(Number(answers.enterGuess) > randomNumber){
        console.log("number is lower than your guess");}
        else {
        console.log("number is higher than your guess");}
    if (counter > 0) {
        counter--;
        guessNumber();
    }
    }
});

}
guessNumber()