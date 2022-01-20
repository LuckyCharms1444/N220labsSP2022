/* 
Jon Ross Richardson
1/20/22
N220
*/


//global var
let gx = 800;
let gy = 600;
let cx = 50;
let cy = 50;
let xs = 2;
let ys = 2;
let r = 25;

//setup
function setup(){
    createCanvas(gx,gy);
    
}

function draw(){
    //refresh page
    background(200,120,55);

    //draw circle
    circle(cx,cy,50);

    //make the ball move
    cx += xs;
    cy += ys;


    //condition when ball hits the wall
    //radius is 25 denoted "r"
    if(cx > gx - r){
        xs = -xs;
    }
    if(cx < r){
        xs = -xs;
    }
    if(cy > gy - r){
        ys = -ys;
    }
    if(cy < r){
        ys = -ys;
    }


    
}
