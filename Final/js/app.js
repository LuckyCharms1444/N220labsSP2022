/*
Jon Ross Richardson
n220
final
*/



//global var
let numWins=0;
let twoCards = [];
let twoObj = [];
let mixDeck;
let correctPairs = 0;
let win = document.getElementById("win");
let numWin = document.getElementById("numWin");



//precursor functions to get it started
dealDeck();




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
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
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




//deal the deck out to the user
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



//function to represent the game using an event
function pick(event){

    //check to see if the cards are the same
    //make sure there are more than one card selected
    if(twoCards.length > 1){
        sameCard();
    }  
    //check to see if the two cards are pairs
    if(twoCards.length > 1){
        winCase(twoCards);
    }  
      
        //collect the event target color
        let color = event.target.dataset.color;
        //collect the event target
        let obj = event.target;
        console.log(obj);

        //statement to check if card was already selected
        if(!(obj.dataset.kill == 1)){
            //push it into the array for card
            twoObj.push(obj);
            //push color into the array
            twoCards.push(color);
            console.log(twoObj);
            console.log(twoCards);
            //change the color of the card on screen
            event.target.style.backgroundColor = color; 
        }
        //check to see if either card has kill in it
        if(twoCards.length > 1){
            eitherCard();
        }
        //checks to see if the counter is full and presents win to player
        if(correctPairs == 8){
            win.innerHTML = "Congrats! You have won!";
            //increases global var for total win
            numWins++;
            //output for player total win
            numWin.innerHTML = "Number of wins: " + numWins;

            console.log("inside pick");
        }
   
}


//function that tests if both event targets are the same
function winCase(array){
    let ar = array;
    
    //case for cards are the same
    if(ar[0] == ar[1]){
        console.log("Cards are the same");
        //increase pair counter
        correctPairs++;
        console.log(correctPairs);
        //set kill attribute
        twoObj[0].setAttribute("data-kill","1");
        twoObj[1].setAttribute("data-kill","1");
        console.log(correctPairs);
        //remove cards from array
        twoCards.splice(0);
        twoObj.splice(0);
    }else{
        //case for cards are not the same
        console.log("winCase");
        //set cards back to black
        twoObj[0].style.backgroundColor = "Black";
        twoObj[1].style.backgroundColor = "Black";
        //push out of array
        twoCards.splice(0);
        twoObj.splice(0);
    }
}

//function to check both cards for kill if only one is kill
function eitherCard(){
    //check both instances in array for kill
    if(twoObj[0].dataset.kill == 1 || twoObj[1].dataset.kill == 1){
        //splice out 0 index
        if(twoObj[0].dataset.kill == 1){
            twoObj.splice(0);
        }else{
            //splice out other index
            twoObj.splice(1);
        }
    }
}

//function to check if both selected is the same card
function sameCard(){
    //check data set if they equal each other
    if(twoObj[0].dataset.number == twoObj[1].dataset.number){
        //console.log("Same card");
        //remove older pick of card
        twoObj.splice(1);
        //console.log(twoObj);
        //remove from card array
        twoCards.splice(1);
        //console.log(twoCards);
    }
}


//function to reset deck
function reset(){
    //reshuffle deck
    mixDeck = shuffle(makeDeck());
    console.log(mixDeck);



    //deal the cards out
    for(let i = 0; i < 16; i++){
        let text = i + 1 + '';
        console.log(text);
        let div = document.getElementById(text);
        console.log(div);
        console.log(mixDeck[i].color);
        //reset them to black
        div.setAttribute("data-color",mixDeck[i].color);
        div.style.backgroundColor = "Black";
        //remove kill number
        div.setAttribute("data-kill","0");
    }
    //reset pairs
    correctPairs = 0;
    //reset HTML
    win.innerHTML = " ";
}

