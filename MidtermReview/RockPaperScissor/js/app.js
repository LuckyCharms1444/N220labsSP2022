/*
Jon Ross Richardson
n220
*/


let comp = 0.0;
let player = 0.0;


//get random number
function rand(){
    return Math.floor(Math.random() * 3);
}
//refresh player score
function playerR(){
    let p = document.getElementById("player");
    p.innerHTML = "Player Score: " + player;
    return console.log("Player Refreshed " + player );
}
//refresh computer score
function compR(){
    let c = document.getElementById("computer");
    c.innerHTML = "Computer Score: " + comp;
    return console.log("Computer Refreshed " + comp);
}

//what happens when player plays rock
function rock(r){
    let get = document.getElementById("results");

    if(r == 0){
        get.innerHTML="Both Rock!";
    }else if(r == 1){
        get.innerHTML="Player chose Rock, Computer chose Paper";
        player = player - 1;
        comp = comp + 1;
    }else{
        get.innerHTML="Player chose Rock, Computer chose Scissors";
        player = player + 1;
        comp = comp - 1;
    }
    playerR();
    compR();
}

//what happens when player plays scissors
function scissor(r){
    let get = document.getElementById("results");

    if(r == 2){
        get.innerHTML="Both Scissor!";
    }else if(r == 1){
        get.innerHTML="Player chose Scissors, Computer chose Paper";
        player = player + 1;
        comp = comp - 1;
    }else{
        get.innerHTML="Player chose Scissors, Computer chose Rock";
        player = player - 1;
        comp = comp + 1;
    }
    playerR();
    compR();
}
//what happens whne player plays paper
function paper(r){
    let get = document.getElementById("results");

    if(r == 2){
        get.innerHTML="Both Paper!";
    }else if(r == 0){
        get.innerHTML="Player chose Paper, Computer chose Rock";
        player = player + 1;
        comp = comp - 1;
    }else{
        get.innerHTML="Player chose Paper, Computer chose Scissors";
        player = player - 1;
        comp = comp + 1;
    }
    playerR();
    compR();
}

//game time
function game(x){

    let play = x;
    let r = rand();

    //checks to see if theres a guard
    if(play == 3){
        player = player - 0.5;
        compR();
        playerR();
        console.log("Player guard");
    }else if(play == 0){
        rock(r);
    }else if(play == 2){
        scissor(r);
    }else{
        paper(r);
    }


}


