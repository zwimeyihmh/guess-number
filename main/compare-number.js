'use strict';

function CompareNumber(){

}

CompareNumber.prototype.compare = function(result,input){
  var sameA = 0;
  var sameB = 0;
  for(var i = 0;i < input.length;i++){
    for(var x = 0;x < result.length;x++){
      if(input[i] === result[x]){
        if(i === x){
          sameA++;
          break;
        }else {
          sameB++;
          break;
        }
      }
    }
  }
  var end = sameA+'A'+sameB+'B';
  return end;
};
module.exports = CompareNumber;
