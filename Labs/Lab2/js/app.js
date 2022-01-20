//universal var
let x = 10;
let y = 10;
size = 25;


//setup
function setup(){
    createCanvas(800,900);
}

function draw(){
background(255,255,255);


//compare where x and y are to mouseX and mouseY
if (x > mouseX){
    x = x- 1;
    console.log("X decrease");
}else{
    x = x + 1;
    console.log("X increase");
}
if (y > mouseY){
    y = y - 1;
    console.log("y decrease");
}else{
    y = y + 1;
    console.log("y increase");
}

circle(x,y,size);


//if mouseClick 
if(mouseIsPressed){
    if(mouseButton === LEFT){
        size = 50;
    }
}else{
    size = 25;
}


//refresh background
console.log(x,y);

}