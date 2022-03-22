 /*
 Jon Ross Richardson

 n220
 */
let x1 = document.getElementById("x1");
let y1 = document.getElementById("y1");

let x2 = document.getElementById("x2");
let y2 = document.getElementById("y2");

function dCalc(){
    //console.log(Number(x1.value));
    //console.log(Number(x2.value));
    //console.log(Number(y1.value));
    //console.log(Number(y2.value));
    d = Math.sqrt((x1.value*x2.value) + (y1.value*y2.value));
    //console.log(d);
    document.getElementById("here").innerHTML=`The distance is ${d}`;
}