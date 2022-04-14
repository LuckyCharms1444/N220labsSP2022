/*
Jon Ross Richardson
n220
4-12-22
*/


//global vars
let red = 0;
let blue = 0;
let green = 0;
let userLine = document.getElementById("rgbLine");
userLine.innerHTML = "Current rgb(" + red + ", " + green + ", " + blue + ")"

//function to change color
function handleClick(event){
    //target event
    let targDiv = event.target;
    let color = targDiv.dataset.color;
    //get att
    let number = Number(targDiv.getAttribute("value"));
    //check the value and add
    if(color == "r"){
        red += number;
    }else if(color == "g"){
        green += number;
    }else if(color == "b"){
        blue += number;
    }else{
        red = 0;
        green = 0;
        blue = 0;
    }
    //output current rgb
    userLine.innerHTML = "Current rgb(" + red + ", " + green + ", " + blue + ")";
    console.log(red);
    console.log(blue);
    console.log(green);
    //style
    let div = document.getElementById("myDiv");
    div.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
}
