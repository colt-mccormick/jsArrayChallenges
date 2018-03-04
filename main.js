//main.js

//Challenge 6
var array6Test1 = [1,3]; // 2
var array6Test2 = [2,3,4]; // 1
var array6Test3 = [13,11,10,3,2,1,4,5,6,9,7,8]; // 12
var challenge6Html = document.getElementById("challenge6")

for(var p=0; p < array6Test3.length; p++){
    var array6check = p + 1; 
    if(array6Test3.indexOf(array6Test3.length + 1) === -1){
       var answer6 = (array6Test3.length + 1);
    }else if(array6Test3.indexOf(array6check) === -1){
       var answer6 = array6check; 
    }
} 

challenge6Html.innerHTML = "<h3>Challenge 6: " + answer6 + "</h3>"; 
