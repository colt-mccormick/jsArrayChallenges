//main.js

//challenge10

var array10 =  [3,6,9];//hide pins 3,5,9
var challenge10Html = document.getElementById("challenge10");

for (var t = 0; t < array10.length; t++){
    var pin = '"' +  array10[t] + '"';
    var pinHtml = document.getElementById(array10[t]);  
    pinHtml.innerHTML = "&nbsp";  
}