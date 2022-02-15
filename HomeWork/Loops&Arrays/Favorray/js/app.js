/*
JonRoss Richardson
2.15.22
n220
*/


//array
let ar = ["basketball","football","soccer","baseball","hockey"];

//
for(let i = 0; i < ar.length; i++){
    let createD = document.createElement("div");
    document.body.appendChild(createD);
    createD.append(ar[i] + ", is one of my favorite things.");
}



