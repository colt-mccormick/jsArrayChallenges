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

challenge6Html.innerHTML = "<h3>Challenge 6:    " + answer6 + "</h3>"; 


//Challenge7

var numBeggars = 3; 
var offerings = [1,2,3,4,5];
var beggar1 = [1, 4]//=5
var beggar2 = [2, 5]//=7
var beggar3 = [3]//=3
//display [5,7,3]
var challenge7Html = document.getElementById('challenge7');
var beggar1Sum = 0;
var beggar2Sum = 0;
var beggar3Sum = 0;
var offerSum = [];

for(var q = 0; q < offerings.length; q++){
    if(beggar1.includes(offerings[q])){
     beggar1Sum += offerings[q];     
    }else if(beggar2.includes(offerings[q])){
        beggar2Sum += offerings[q];  
    }else if(beggar3.includes(offerings[q])){
        beggar3Sum += offerings[q];
    }
}
offerSum.push(beggar1Sum,beggar2Sum,beggar3Sum);

challenge7Html.innerHTML = "<h3>Challenge7: [" + offerSum + "]</h3>"