//main.js

//Challenge #5

var array1Challenge5 = [1,2, 4, 7, 5, 9];
var array2Challenge5 = [5, 9, 2];
//display = [1, 4, 7]

var challenge5Html= document.getElementById("challenge5")
var arrayAnswer5=[];
for(n=0; n < array1Challenge5.length; n++){//run for loop
   if(array2Challenge5.includes(array1Challenge5[n])){
   }else{
    arrayAnswer5.push(array1Challenge5[n]);
   }
}

challenge5Html.innerHTML = "<h3>" + arrayAnswer5 + "</h3>";
