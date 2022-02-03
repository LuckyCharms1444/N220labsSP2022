/* 
Jon Ross Richardson
0/3/33
N22
*/



//object call
let obj = {
    x:100,
    y:200,
    width:50,
    height:75,
    size:50,
    color:"#FF3403"
};

//function that takes in object and draws 
function objDraw(a){
    fill(a.color);
    rect(a.x+100,a.y+100,a.height,a.width);
}


//Canvas creation
function setup(){
    createCanvas(600,800);
}

//draw function call
function draw(){
    //fill with object color
fill(obj.color);
//circle with object call
circle(obj.x,obj.y,obj.size);
//function call that takes object
objDraw(obj);
}
