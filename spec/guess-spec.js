'use strict';

var Guess = require('../main/guess.js');
var AnswerGenerator = require('../main/answer-generator.js');
var CompareNumber = require('../main/compare-number.js');

describe('Guess', function() {
  describe('#guessNumber()', function() {


    it('can return 0A0B', function() {
      var answerGeneration = new AnswerGenerator();
      spyOn(answerGeneration,'getNumber').and.returnValue('1234');
      var compareNumber = new CompareNumber();
      spyOn(compareNumber,'compare').and.callFake(function(answer,input){
        if(answer === '1234' && input === '2531'){
          return '1A2B';
        }
      });

      var guess = new Guess(answerGeneration,compareNumber);
      var result = guess.guessNumber('2531');

      expect(result).toBe('1A2B');
    });

  });
});
