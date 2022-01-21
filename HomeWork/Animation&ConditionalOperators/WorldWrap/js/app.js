/*
Jon Ross Richardson
1/21/22
n220
*/



//global var
let cx = 0;
let cy = 300;
let xs = 5;


//setup
function setup(){
    createCanvas(800,600);
}

//draw function

function draw(){
    //refresh background
    background(0,200,0);
    fill(250,12,120);
    stroke(255,0,0);



    //circle on screen
    circle(cx,cy,50);

    //move the circle
    cx = cx + xs;

    //condition when circle hits the end of the world
    if(cx > 800){
        cx = 0;
    }

}
