


let getInput = document.getElementById("userInput");
let dv = document.getElementById("dv1");


function something(){

    let text = getInput.value;

    let word = "";
    
    let line = `${text} ${text} ${text}`;
    dv.innerHTML = line;


}