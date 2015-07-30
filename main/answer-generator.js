'use strict';

var _ = require('lodash');
function AnswerGenerator() {

}

AnswerGenerator.prototype.getNumber = function() {
  var result = '';

  for(var i = 0; i < 4; i++){

    var temp = 0;
    var number  = _.ceil(_.random(0,9));
    for(var x = 0; x < result.length; x++){
      if(result[x] === number+''){
        i = i - 1;
        temp = 1;
        break;
      }
    }

    if(temp === 0){
      result += number;
    }

  }

  return result;

};

module.exports = AnswerGenerator;
