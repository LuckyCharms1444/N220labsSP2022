/*
Jon Ross Richardson
02/8/22
N220
*/


//function built around HTML tag
function pixel(){
    //get tags width
    let pixW = document.getElementById("pix").clientWidth;
    //get tags length
    let pixL = document.getElementById("pix").clientHeight;
    //ten percent
    let ten = .1;
    //Math with ten percent with width
    let chicW = (ten * pixW) + pixW;
    //console.log(chicW);
    //Math with ten percent with length
    let chicH = (ten * pixL) + pixL;
    //console.log(chicH)
    //change the width
    pix.style.width = chicW + "px";
    //change the length
    pix.style.height = chicH + "px";

}