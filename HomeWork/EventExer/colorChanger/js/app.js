/*
Jon Ross Richardson
n220
4-12-22
*/


//function that changes color
function handleClick(event){

    let color = event.target.dataset.color;
    console.log(color);
    event.target.style.backgroundColor = color; 

};