/*
Jon Ross Richardson
1/25/22
N220
*/



//polarPoint function with 1 parameter
function polarPoint(r){
    let x = r * Math.sin(mouseX);
    let y = Math.cos(mouseX);
    return createVector(x,y);
}


function setup(){
    createCanvas(800,600);
}

function draw(){
    background(0,0,0);
    let res = polarPoint(10);
    translate(100,100);
    console.log(res.x);
    console.log(res.y);
    circle(res.x,res.y,10);
}