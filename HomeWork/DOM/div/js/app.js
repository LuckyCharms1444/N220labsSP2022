/*
Jon Ross Richardson
2/8/22
N220
*/

//loop to create the divs
for(let i = 0; i < 100; i++){
    //creates a div on the document
    let createD = document.createElement("div");
    document.body.appendChild(createD);

    //add css to the div
    createD.style.width="20px";
    createD.style.height="20px";
    createD.style.cssFloat="left";
    
    //array to store the rgb numbers
    let ar = [];
    
    //loop to create and store the colors
    for(let j = 0; j < 3; j++){
        ar[j] = Math.floor(Math.random() * 256);
    }


    //let rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    //give the rgb to a variable
    //let rgb = `rgb(${ar[0]},${ar[1]},${ar[2]})`;
    let rgb = "rgb("+ar[0]+","+ar[1]+","+ar[2]+")";
    //console.log(rgb);
    //style the background
    createD.style.background= rgb;
}
