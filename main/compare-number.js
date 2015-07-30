'use strict';
var _ = require('lodash');
function CompareNumber(){

}

CompareNumber.prototype.compare = function(result,input){
  var sameA = 0;
  var sameB = 0;
  var index;
  for(var i = 0;i < input.length;i++){
    index = _.findIndex(result,function(word){
      return word == input[i];
    });
    if(index !== -1){
      if(i === index){
        sameA++;
      } else {
        sameB++;
      }
    }
  }
  var end = sameA+'A'+sameB+'B';
  return end;
};
module.exports = CompareNumber;
