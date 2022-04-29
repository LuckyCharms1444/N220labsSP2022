/*
Jon Ross Richardson
n220
final
*/


let numWins=0;
let twoCards = [];
let twoObj = [];
let mixDeck;
let correctPairs = 0;
let win = document.getElementById("win");
let numWin = document.getElementById("numWin");




dealDeck();
checkWin();




//card object constructor
function Card(h,w,p,mL,mR,f,color){
    this.color = color;
    this.h = h;
    this.w = w;
    this.p = p;
    this.mL = mL;
    this.mR = mR;
    this.f = f;
};





//creates the deck of cards
function makeDeck(){
    //bank of 8 colors
    let bank = ["Red","Blue","Green","Yellow","Purple","Orange","Brown","Pink",
    "Red","Blue","Green","Yellow","Purple","Orange","Brown","Pink"];
    let bankCount = 0;
    let ar = [];
    //creates one array with all the colors input into the object
    for(let i = 0; i < 16; i+=2){
        let obj = new Card(50,50,15,10,10,10,bank[bankCount]);
        console.log(bank[bankCount]);
        ar[i] = obj;
        ar[i+1] = obj;
        bankCount++;
    }
    return ar;
}


//shuffle the cards && algorithm is from stackOverflow
//
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }





function dealDeck(){
    mixDeck = shuffle(makeDeck());
    console.log(mixDeck);



    //deal the cards out
    for(let i = 0; i < 16; i++){
        let text = i + 1 + '';
        console.log(text);
        let div = document.getElementById(text);
        console.log(div);
        console.log(mixDeck[i].color);
        div.setAttribute("data-color",mixDeck[i].color);
    }
}



function pick(event){

    if(twoCards.length > 1){
        sameCard();
    }  
    if(twoCards.length > 1){
        winCase(twoCards);
    }  
      
    
        let color = event.target.dataset.color;
        let obj = event.target;
        console.log(obj);

        if(!(obj.dataset.kill == 1)){
    
            twoObj.push(obj);
            twoCards.push(color);
            console.log(twoObj);
            console.log(twoCards);
            event.target.style.backgroundColor = color; 
        }
        if(twoCards.length > 1){
            eitherCard();
        }

        if(correctPairs == 8){
            win.innerHTML = "Congrats! You have won!";
            numWins++;
            numWin.innerHTML = "Number of wins: " + numWins;

            console.log("inside pick");
        }
   
}


function winCase(array){
    let ar = array;
    
    if(ar[0] == ar[1]){
        console.log("Cards are the same");
        correctPairs++;
        console.log(correctPairs);
        twoObj[0].setAttribute("data-kill","1");
        twoObj[1].setAttribute("data-kill","1");
        console.log(correctPairs);
        twoCards.splice(0);
        twoObj.splice(0);
    }else{

        console.log("winCase");
        twoObj[0].style.backgroundColor = "Black";
        twoObj[1].style.backgroundColor = "Black";
        twoCards.splice(0);
        twoObj.splice(0);
    }
}



function check2(){
    let first = twoObj[0];
    let second = twoObj[1];
    

    if(first.dataset.number == second.dataset.number){
        console.log("Same card");

        for(let i = 0;i < 2;i++){
        twoObj[i].style.backgroundColor = "Black";
        }
        twoCards.splice(0);
        twoObj.splice(0);
        


    }
}

function eitherCard(){
    if(twoObj[0].dataset.kill == 1 || twoObj[1].dataset.kill == 1){
        if(twoObj[0].dataset.kill == 1){
            twoObj.splice(0);
        }else{
            twoObj.splice(1);
        }
    }
}

function sameCard(){
    if(twoObj[0].dataset.number == twoObj[1].dataset.number){
        //console.log("Same card");
        twoObj.splice(1);
        //console.log(twoObj);
        twoCards.splice(1);
        //console.log(twoCards);
    }
}



function checkWin(){

        if(correctPairs == 8){
            win.innerHTML = "Congrats! You have won!";
            console.log("win");
        }else{
            setTimeout(checkWin,600);
            console.log("waiting");
        }
}



function reset(){
    mixDeck = shuffle(makeDeck());
    console.log(mixDeck);



    //deal the cards out
    for(let i = 0; i < 16; i++){
        let text = i + 1 + '';
        console.log(text);
        let div = document.getElementById(text);
        console.log(div);
        console.log(mixDeck[i].color);
        div.setAttribute("data-color",mixDeck[i].color);
        div.style.backgroundColor = "Black";
        div.setAttribute("data-kill","0");
    }
    correctPairs = 0;
    win.innerHTML = " ";
}

