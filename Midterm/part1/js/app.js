/*
Jon Ross Richardson
3.1.22
n22
*/

//nice konami code Travis
let ar = ["up","up","down","down","down","left","right","left","right","a","b","start"];

//create div on page
let createD = document.createElement("div"); 
document.body.appendChild(createD);

//loop that writes to the div
for(i=0; i<ar.length; i++) {
    //no dash on the last run
    if(i<ar.length - 1){
    createD.append(ar[i] + " - ");
    }else{
        createD.append(ar[i]);
    }
}