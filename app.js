console.log("did I remember to attatch this? ... ... ...Noice.")

//Sum All Numbers in a Range
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
     sum += i; 
   }
   return sum;
   }
   sumAll([1, 4]);


//Sum All Odd Fibonacci Numbers

function sumFibs(num) {
    var pNumber = 0;
      var cNumber = 1;
      var result = 0;
    while( cNumber <= num) {
      if(cNumber % 2 !== 0) {
        result += cNumber
      }
      cNumber += pNumber;
      pNumber = cNumber - pNumber;
    }
    return result;
  }
  sumFibs(4);

//Sorted Union
function uniteUnique(arr1, arr2, arr3) {
    var array = [];
    for (var i = 0; i < arguments.length; i++) {
      var arrrrrrgs = arguments[i];
      for (var j = 0; j < arrrrrrgs.length; j++) {
        var value = arrrrrrgs[j];
       if (array.indexOf(value) < 0) {
          array.push(value);
        }
      }
    }
    return array;
  }
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);