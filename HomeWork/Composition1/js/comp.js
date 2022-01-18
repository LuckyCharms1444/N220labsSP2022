//JON ROSS RICHARDSON 
//1/18/2022
//N220
//declare world variables
let x = 200;
let y = 200;
let size = 50;

//setup for the canvas and creatio
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

//function to get things on the screen 
function draw(){

    stroke(255,90,90);
    fill(40,55,250);
    circle(x,y,size + 50);
    rect(x+100,y+100,x-100,y-100);
    circle(x+300,y,size + 50);
    fill(255,100,50);
    circle(x,y,size);
    circle(x+300,y,size);
    fill(255,0,0);
    arc(x+150,y+300,200,200,50,PI, CHORD)


}