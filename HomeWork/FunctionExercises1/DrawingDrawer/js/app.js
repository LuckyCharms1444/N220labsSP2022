/*
Jon Ross Richardson
1/25/22
N220
*/

//function creates car and 2 parameters
function createCar(x,y){
    //refreash background
    background(255.255,255);
    //make some changes to the color and stroke
    noStroke();
    fill(170,20,70);
    //2 rectangles to make the body
    rect(x,y,300,100);
    rect(x+100,y-50,150,100);
    //wheel color black
    fill(0,0,0);
    //circles for wheels
    circle(x,y+100,50);
    circle(x+300,y + 100,50);

}

//create canvas
function setup(){
    createCanvas(800,1000);
}

//draw function 
function draw(){
    //calls for function with parameters
createCar(mouseX,mouseY);
    
}





