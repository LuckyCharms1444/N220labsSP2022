/*
Jon Ross Richardson
1/20/22
N220
*/

//global var



//setup

function setup(){
    createCanvas(800,600);
}

//draw
function draw(){
    //background for easier reference to the half
    background(0,255,0);

    //will fill the color of the circle based on which half each on 
    if(mouseX > 400){
        fill(255,0,0);
    }else{
        fill(0,0,255);
    }
    //draw circle with the correct fill
    circle(mouseX,mouseY,25);

}

