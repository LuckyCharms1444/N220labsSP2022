/*
Jon Ross Richardson
2/4/22
n220
*/

//object

let objBall = {
    gx:800,
    gy:600,
    cx:50,
    cy:50,
    xs:2,
    ys:2,
    r:25,
    size:50,
};


function ball(){
        //refresh page
        background(200,120,55);

        //draw circle
        circle(objBall.cx,objBall.cy,objBall.size);
    
        //make the ball move
        objBall.cx += objBall.xs;
        objBall.cy += objBall.ys;
    
    
        //condition when ball hits the wall
        //radius is 25 denoted "r"
        //Reworked my if statements so I was not repearing similar expressions with the same results
        if(objBall.cx > objBall.gx - objBall.r || objBall.cx < objBall.r){
            objBall.xs = -objBall.xs;
        }
        if(objBall.cy > objBall.gy - objBall.r || objBall.cy < objBall.r){
            objBall.ys = -objBall.ys;
        }
    
}

//setup
function setup(){
    createCanvas(objBall.gx,objBall.gy);
    
}

function draw(){
    ball();    
}


