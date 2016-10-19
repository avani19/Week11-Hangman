// require your letter objects
var Letter = require('./letter.js');

var Word = function(wrd){
// property to store the string wrd
this.word = wrd;

// a collection of letter objects
this.letters = [];

// property is the word found?
this.wordFound = false;

	this.getLets = function() {
// populate the collection above with new Letter objects
 for( var i = 0; i<this.word.length; i++){
 	var newLetter = new Letter(this.word[i]);
      this.letters.push(newLetter);
 }
	};
	
	//found the current word
	this.didWeFindTheWord = function() {
		//sets this.found in the word object to true or false if all letter objects have a true value in their appear property
		this.Wordfound = this.letter.every(function(checkLetter){
      return checkLetter.Wordfound;
		});
	};

	this.checkIfLetterFound = function(guessLetter) {
 var whatToReturn =0;
// iterate through the collection of letter Objects
 for(var i=0; i<this.letter.length; i++){
      // if guessLetter matches Letter property, the letter object should be shown
      if(this.letter[i].let===guessLetter){
      this.letter[i].letterShown = true;
      whatToReturn++;
		return whatToReturn;
		console.log('What to Return: ' + whatToReturn);
	}
}
	};

	this.wordRender = function() {
		var str = " ";
// render the word based on if letters are found or ot found
for(var i = 0; i<this.letter.length; i++){
	 str += this.let[i].letterRender();
		return str;
		 console.log('Word Rendered : ' + str);
	}
	};
}

// export to use in main.js
module.exports = Word;