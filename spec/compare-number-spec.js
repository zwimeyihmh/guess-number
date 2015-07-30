'use strict';

var CompareNumber = require('../main/compare-number.js');

describe('CompareNumber',function(){

  describe('#compare()',function(){

    var compareNumber;
    beforeEach(function(){
      compareNumber = new CompareNumber();
    });

    it('can return 0A0B',function(){
      var result = compareNumber.compare('9876','2531');
      expect(result).toBe('0A0B');
    });

    it('can return 4A0B',function(){
      var result = compareNumber.compare('9876','9876');
      expect(result).toBe('4A0B');
    });

    it('can return 0A4B',function(){
      var result = compareNumber.compare('1234','4321');
      expect(result).toBe('0A4B');
    });

  });
});
