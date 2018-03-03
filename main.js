//main.js


//Challenge #4

var challengeFourInputA = [ 1, 2, 3 ];  // [2, 4, 6]
var challengeFourInputB = [ 3, 8, 1, 2, 4, 12 ];  // [ 6, 16, 2, 4, 8, 24 ]
var challenge4Html = document.getElementById("challenge4");

for(m=0;m < challengeFourInputB.length; m++){ //loop through array
    challengeFourInputB[m] = challengeFourInputB[m]* 2; //multiply index position * 2
}

challenge4Html.innerHTML = "<h3>" + challengeFourInputB + "</h3>";