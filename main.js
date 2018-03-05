//main.js

//challenge8

var challenge8Html = document.getElementById("challenge8");
var test1 = 274; // Display = '2-7-4'

var num8Array = test1.toString().split('');

for(var r = 0; r < num8Array.length - 1; r++){
    if(Number(num8Array[r]) % 2 != 0){
        if(num8Array[r] === num8Array[0]){
           num8Array[r] = num8Array[0] + "-";
        } 
        else if (num8Array[r] == num8Array[num8Array.length - 1]){
            num8Array.splice(-1,0,"-");
          }
        else if (num8Array[r + 1] % 2 != 0) {
            num8Array[r] = '-' + num8Array[r];
          }
          else if (num8Array[r - 1] % 2 != 0) {
            num8Array[r] = num8Array[r] + '-';
          }
          else{
            num8Array[r] = '-' + num8Array[r] + '-';
          }
        }
      }

challenge8Html.innerHTML = "<h3>Challenge 8: " + num8Array.join("") + "</h3>"