
var game = require('./game.js');
var Word = require('./word.js');
var wordGameStart = Game.gameWord.game;
 console.log(gameStart);
 // require prompt to use to make the game 
 var prompt = require('prompt');
 var inquirer = require('inquirer');
//require the objects/exports you will use

prompt.start();

var game = {
	// create or import a list of words
	wordBank : Game.gameWord.wordList,
	// count of words Found
	// wordsWon : 0;
	guessesRemaining : 10, //per word
	currentWrd : null, //the word object
	startGame : function (wrd){
		//make sure the user has 10 guesses

		//get a random word from the array
		 var RandomWord = this.wordBank[Math.floor(Math.random()*this.wordBank.length)];
    console.log(RandomWord);

		//populate currentWrd (made from Word constructor function) object with letters
this.currentWrd = new Word(RandomWord);
    this.currentWrd.getLets();
    this.keepPromptingUser();
		this.keepPromptingUser();
	}, 
	resetGuessesRemaining : function(){
    // reset guess count for new game	
    this.guessesRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		    // result is an object like this: { guessLetter: 'f' }
		    //console.log(result);
		    
			  // console log the letetr you chose
			  console.log('Guessed Letter :'+ result.guessLetter)


		    //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
 var letterFoundByUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);
		    //if the user guessed incorrectly minus the number of guesses they have left
				// and console.log if they were incorrect or correct
				if(letterFoundByUserGuess===0){
            self.guessesRemaining ;
            console.log("You Guessed Wrong Word!!");
          }else{
            console.log("You Guessed Right Word!");
          }
		    	
				//check if you win only when you are right
        //end game
        if (self.currentWrd.didWeFindTheWord()) {
          console.log("You Won!!!");
          return 1;
        }else{
		    // display the user how many guesses remaining
			console.log("Guesses remaining:"+ self.guessesRemaining);

				// render the word 
				console.log(self.currentWrd.wordRender());
				// display letters the user has guessed

			  // if user has remaining guesses and Word isn't found
			if (self.guessesRemaining > 0 && self.currentWrd.wordfound === false){
            self.keepPromptingUser();
        } else {
				// if user has no guesses left, show them the word and tell them they lost
			if (self.guessesRemaining === 0){
              console.log("Game Over !!"); 
              console.log("The word Guessed was:"+self.RandomWord);
            }else {
				// else show the user word and rendered
				console.log(self.currentWrd.wordRender);
			}
		}
	}
		});
	}
}

// };

game.startGame();
