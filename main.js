//main.js

var phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] // => displays "(123) 456-7890"

var areaCode = [];
var preFix = [];
var lastFour = [];
var challenge9Html = document.getElementById("challenge9")

for ( var s = 0; s < phoneNumber.length; s++){
    if(s < 3){
        areaCode.push(phoneNumber[s]);
        console.log("areacode", areaCode)
    } else if(s >= 3 && s < 6){
        preFix.push(phoneNumber[s]);
        console.log("prefix",preFix)
    } else{
        lastFour.push(phoneNumber[s])
        console.log("lastFour", lastFour)
    }
}
var phoneDisplay = "(" + areaCode.join("") + ") " + preFix.join("") + "-" + lastFour.join("");
challenge9Html.innerHTML = "<h3>Challenge 9: " + phoneDisplay + "</h3>"



