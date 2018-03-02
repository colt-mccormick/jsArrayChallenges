//main.js

//Challenge #3



var challengeThreeInputA = [ 1, 1, 1, 2, 1, 1 ];  // 2
var challengeThreeInputB = [ 0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0 ];  // 0.55
var index0 = challengeThreeInputB[0];
var index1 = challengeThreeInputB[1];
var index2 = challengeThreeInputB[2]; 
var answer3;
var challenge3Html = document.getElementById("challenge3"); 

if(index0 !== index1 && index1 === index2){ // returns [0] if [0]<>[1] & [1]=[2]
        answer3 =  challengeThreeInputB[0]; 
    } else if(index0 !== index1 && index0 === index2){ // returns [1] if [0]<>[1] & [1]=[2]
        answer3 =  challengeThreeInputB[1]; 
    } else if(index0 === index1 && index1 !== index2){ //returns [2] if [0]<>[1] & [1]=[2]
        answer3 =  challengeThreeInputB[2];
    }else {for (var l = 2; l < challengeThreeInputB.length; l++){ //run loop if [0]=[1]=[2]
        if(index2 != challengeThreeInputB[l]){
         answer3 = challengeThreeInputB[l];
        }
    }
}

challenge3Html.innerHTML = "<h3>" + answer3 + "</h3>"