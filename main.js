//main.js

//console.log('hello world!')

//Challenge #1

var challengeOneInput = "jumbo shrimp"; 

var challengeOneInput = challengeOneInput.split(" ");   
var alphabet = "abcdefghijklmnopqrstuvwxyz"; //set alphabet var
var firstWordArray = challengeOneInput[0].split(''); //splits first word
var secondWordArray = challengeOneInput[1].split(''); //splits second word 
var firstWordCount = 0; 
var secondWordCount = 0; 
var challenge1HTML = document.getElementById('challenge1'); 

for (i=0; i<firstWordArray.length; i++){
    firstWordCount += alphabet.indexOf(firstWordArray[i]) + 1; 
}

for (i=0; i<secondWordArray.length; i++){
    secondWordCount += alphabet.indexOf(secondWordArray[i]) + 1; 
}

if(firstWordCount > secondWordCount){
        challenge1HTML.innerHTML = "<h3>" + firstWordArray.join('') + "</h3>"
} else{
    challenge1HTML.innerHTML = "<h3>" + secondWordArray.join('' ) + "</h3>"
}

