//universal var
let x = 10;
let y = 10;
let size = 25;


//setup
function setup(){
    createCanvas(800,900);
}

function draw(){
    //refresh background
background(255,255,255);


//compare where x and y are to mouseX and mouseY
if (x > mouseX){
    x = x- 1;
}else{
    x = x + 1;
}
if (y > mouseY){
    y = y - 1;
}else{
    y = y + 1;
}
//draw circle
circle(x,y,size);

//if mouseClick 
if(mouseIsPressed){
    if(mouseButton === LEFT){
        size = 50;
    }
}else{
    size = 25;
}



}