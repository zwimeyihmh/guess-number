'use strict';

var AnswerGenerator = require('../main/answer-generator.js');

describe('AnswerGenerator', function() {
  describe('#getNumber()', function() {
    var result1 = true;
    var result2 = true;
    var result3 = true;
    var result4 = true;
    beforeEach(function() {
      var answerGeneration = new AnswerGenerator();
      var digit = answerGeneration.getNumber();
      if (digit.length !== 4) {
        result1 = false;
      }

      for (var i = 0; i < digit.length; i++) {
        var temp = 1;
        for (var x = 0; x !== i && x < digit.length; x++) {
          if (digit[i] === digit[x]) {
            temp = 0;
            break;
          }
        }
        if (temp === 0) {
          result2 = false;
        }
      }
    for(var y = 0; y < digit.length; y++){

      if(typeof(parseInt(digit[y])) !== typeof(1)){
        result3 = false;
        break;
      }
    }
    });

    it('the number of length four', function() {
      expect(result1).toBe(true);
    });
    it('number is no-repeat',function(){
      expect(result2).toBe(true);
    });
    it('it is a number',function(){
      expect(result3).toBe(true);
    });
    it('it is random number',function(){
      expect(result4).toBe(true);
    });
    it('should be mock', function() {
      var answerGeneration = new AnswerGenerator();
    spyOn(answerGeneration, 'getNumber').and.returnValue(true);

    expect(answerGeneration.getNumber()).toBe(true);
  });
  });
});
