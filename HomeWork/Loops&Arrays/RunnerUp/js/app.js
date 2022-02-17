/*
JonRoss Richardson
02.15.22
n220
*/



//array with times
let ar = [3.2,3.6,4.1];

//array that outputs the runner up times
for(let i = 1; i < ar.length; i++){
    //create element
    let createD = document.createElement("div");
    //put element on page
    document.body.appendChild(createD);
    //change whats in the element
    createD.append(ar[i]);
}