/*
Jon Ross Richardson
2/10/22
n220
*/



//
let objTV = {
    x:150,
    y:200,
    h:300,
    w:250,
    adj:50,
    half:100,
    x1:300,
    y1:200,
    x2:50,
    y2:50,
};

let objTV2 = {
    x:400,
    y:500,
    h:300,
    w:250,
    adj:50,
    half:100,
    x1:300,
    y1:200,
    x2:50,
    y2:50,
}




function drawTV(tv){
    fill('#964B00');
    noStroke();
    rect(tv.x,tv.y,tv.h,tv.w);
    fill(0,0,200);
    rect(tv.x + tv.adj,tv.y + tv.adj,tv.h - tv.half,tv.w - tv.half);
    stroke(0);
    line(tv.x + tv.x1 ,tv.y, tv.x + tv.x2, tv.y - tv.y2);
    
}



function setup(){
    createCanvas(1000,1000);
}

function draw(){
    drawTV(objTV);
    drawTV(objTV2);   
}