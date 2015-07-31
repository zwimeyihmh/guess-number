'use strict';

var _ = require('lodash');
var Guess = require('../main/guess.js');
var AnswerGenerator = require('../main/answer-generator.js');
var CompareNumber = require('../main/compare-number.js');

describe('Guessa',function(){

  describe('#getResult()',function(){
    var answerGeneration;
    var compareNumber;

    beforeEach(function(){
var temp = 0;
      spyOn(_,'random').and.callFake(function(){
        var numberArray = [1,2,3,4];
         return numberArray[temp++];
      });

      answerGeneration = new AnswerGenerator(_);
      compareNumber = new CompareNumber();
    });

    it('get 4A0B',function(){

      var guess = new Guess(answerGeneration,compareNumber);
      var result = guess.guessNumber('1234');
      expect(result).toBe('4A0B');

    });

    it('get 0A0B',function(){

      var guess = new Guess(answerGeneration,compareNumber);
      var result = guess.guessNumber('5678');
      expect(result).toBe('0A0B');

    });

    it('get 0A4B',function(){

      var guess = new Guess(answerGeneration,compareNumber);
      var result = guess.guessNumber('4321');
      expect(result).toBe('0A4B');

    });

  });

});
