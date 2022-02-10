/*
Jon Ross Richardson
2/8/22
N220
*/


//function when mouse is on
function on(){
    //get ID and change color
    let ele = document.getElementById("specs");
    ele.style.backgroundColor="#000000";
    console.log("Mouse is on");
}

//function when mouse is off
function out(){
    //get ID and change color
    let ele = document.getElementById("specs");
    ele.style.backgroundColor="#0000FF";
    console.log("Mouse is off");
}