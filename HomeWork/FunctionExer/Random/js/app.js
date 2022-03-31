/*
Jon Ross Richardson
3-31-22
n220
*/

//make random number
function makeRan(){
    //create random
    let ranNum = Math.round(Math.floor(Math.random() * 11));
    console.log(ranNum);
    //return it
    return ranNum; 
}

//output random number
function doRan(){
    //get element on page
    let div = document.getElementById("div");
    //create random
    let random = makeRan();
    //output on page
    div.innerHTML = random;

}
