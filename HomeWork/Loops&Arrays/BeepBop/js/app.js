/*
Jon Ross Richardson
02/15/22
N220
*/


//loop that runs 25 times
for(let i = 1; i <= 25; i++){

    //write to DOM
    let createD = document.createElement("div");
    document.body.appendChild(createD);

    //scenerios for different conditions and still outputs i
    if(i%3 == 0 && i%5 == 0){
        createD.append("beepbop")
    }else if(i%3 == 0){
        createD.append("beep");
    }else if(i%5 == 0){
        createD.append("bop");
    }else{
        createD.append(i);
    }
}
