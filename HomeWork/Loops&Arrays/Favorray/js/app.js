/*
JonRoss Richardson
2.15.22
n220
*/


//array
let ar = ["basketball","football","soccer","baseball","hockey"];

//loop that ouputs it
for(let i = 0; i < ar.length; i++){
    //create element
    let createD = document.createElement("div");
    //put element on page
    document.body.appendChild(createD);
    //change what is in the element
    createD.append(ar[i] + ", is one of my favorite things.");
}



