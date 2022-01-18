//JON ROSS RICHARDSON 
//1/18/2022
//N220
let size = 10;

function setup(){
    createCanvas(800,800);
    /*
    stroke(255,255,255);
    fill(255,90,90);
    circle(150,150,40);
    circle(300,150,40);
    fill(186,255,180);
    arc(200,300,200,200,50,PI, CHORD)
    */
}

function draw(){
    size = size + 1;
    console.log(size);
    stroke(255,90,90);
    circle(size,100,50);
}