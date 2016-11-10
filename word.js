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
    // this.Wordfound = this.letter.every(function(checkLetter){
    //     return checkLetter.Wordfound;
    // });
    if(this.letters.every(function(isLtr){
      return isLtr.appear === true;
    })){
      this.wordFound = true;
      return true;
    }
  };

  this.checkIfLetterFound = function(guessLetter) {
    var whatToReturn =0;
    // iterate through the collection of letter Objects
    this.letters.forEach(function(isLtr){
      //changed guessedLetter to guessLetter to match argument on line 36
      if(isLtr.letter === guessLetter){
        isLtr.appear = true;
        whatToReturn++;
      }
    })
    // if guessLetter matches Letter property, the letter object should be shown
  	return whatToReturn;
  };

  this.wordRender = function() {
  	var str = " ";
    // render the word based on if letters are found or ot found
    this.letters.forEach(function(isLtr){
      var currentLetter = isLtr.letterRender();
      str += currentLetter;
    });
  	return str;
  };
}

// export to use in main.js
module.exports = Word;