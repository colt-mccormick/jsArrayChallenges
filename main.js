//main.js

//console.log('hello world!')

//Challenge #2

var challengeTwoInputA = [1,2,3,4,5,6,7,8,9];  //[1,2,7,4,5,6,3,8,9];
var challengeTwoInputB = [12,13,14];  //[12,17,14];
var challengeTwoInputC = [9,2,4,7,3];  //[9,2,4,3,7];
var challenge2Array = []; 

for(j=0; j < challengeTwoInputB.length; j++){
      // turns the number into a string and then splits the string
    var numberStringArray = challengeTwoInputB[j].toString().split("");
     // replaces 7s in the split string array with 3s and vice versa
  for (k = 0; k < numberStringArray.length; k++) {
    if (numberStringArray[k] == "3") {
        numberStringArray[k] = "7";
      } else if (numberStringArray[k] == "7") {
        numberStringArray[k] = "3";
      }
    }
      // joins the array back into a string, converts it to a number, and pushes it
    challenge2Array.push(Number(numberStringArray.join('')));
}

  console.log('challenge2Array: ', challenge2Array); 

  var challenge2Html = document.getElementById('challenge2'); 
  challenge2.innerHTML = '<h3>' + challenge2Array + '</h3>'; 
