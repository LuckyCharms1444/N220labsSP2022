/*
Jon Ross Richardson
2/3/22
n220
*/

//object
let pet = {
    x:100,
    y:100,
    size:50,
    offset:0,
};


//canvas call
function setup(){
    createCanvas(600,800);
}

//draw call
function draw(){
    //refreash background
    background(0);
    //make x and y the mouse
    pet.x = mouseX;
    pet.y = mouseY;

    //make offset subtract
    if(mouseIsPressed && pet.offset > 0){
        pet.offset = pet.offset - 1;
        //console.log(pet.offset);
    }
    //make offset add 
    if(!mouseIsPressed){
        pet.offset = pet.offset + 1;
        //console.log(pet.offset);
    }
    //draw circle
    circle(pet.x + pet.offset,pet.y,pet.size);
}
