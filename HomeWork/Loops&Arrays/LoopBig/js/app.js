/*
Jon Ross Richardson
02/15/22
N220
*/


//create the array
let ar = [1000,2000,3000,4000,5000];
//get the id tag from div
let div = document.getElementById("div1");


//loop that makes it appear on page
for(let i = 0; i < ar.length; i++){
    div.append(ar[i] + " ");
}
