/*
Jon Ross Richardson
1/25/22
N220
*/


//function that removes red out of it
function noRed(r,b,g){
    //console.log(r);
    //console.log(b);
    //console.log(g);
    //take red away
    r =0;
    //console.log(r);
    return color(r,b,g);
}


//setup function
function setup(){
    createCanvas(800,600);
}

//draw function
function draw(){
    //function call into the variable
    let redless = noRed(150,15,150);
    //color the circle
    fill(redless);
    //circle call
    circle(250,250,50)
    
}

