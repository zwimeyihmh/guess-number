'use strict';
// var _ = require('lodash');
// var AnswerGenerator = require('./answer-generator.js');
// var CompareNumber = require('./compare-number.js');
function Guess(answerGeneration,compareNumber) {
  this.answer = answerGeneration.getNumber();
  this.compareNumber = compareNumber;
}
Guess.prototype.guessNumber = function(input) {
  console.log(this.answer);
  return this.compareNumber.compare(this.answer,input);
};
module.exports = Guess;
