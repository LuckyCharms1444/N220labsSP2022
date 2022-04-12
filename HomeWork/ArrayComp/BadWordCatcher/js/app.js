

let badWords =["clear","water","tires"];
let output = document.getElementById("badWord");
let word = false;
let count = 0;




//let wordCounter = 0;

function heres(){
    //let badWord = document.getElementById("badWord");//output for later
    let str = document.getElementById("bad").value;//text field input
    let badA = str.split(" ");//split text field into a new array of substrings
    console.log(badA);

    for(let i=0; i < badWords.length;i++){
        for(let j=0; j<badA.length; j++){
            if(badWords[i] == badA[j]){
                word = true;
                count++;
            }
        }
    }
    console.log(count);
    if(word == true){
        output.innerHTML="There are " + count + " bad word(s)";
    }else{
        output.innerHTML="There are no bad words";
    }
    document.getElementById("bad").reset;
    count = 0;
        
}

