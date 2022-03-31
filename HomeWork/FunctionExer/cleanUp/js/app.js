/*
Jon Ross Richardson
3-29-22
*/

function removeHash(){

    //Get the user information
    let div = document.getElementById("userOut");
    let user = document.getElementById("userIn").value;

    //initialize words
    let newText;
    let oldText = user;
    //console.log(oldText);

    //loop that goes through the string and finds any hashtags to replace
    for(let i = 0; i < user.length; i++){
        //console.log(oldText);
        //check to see if the word has any hastags
        if(oldText.indexOf("#") == -1){
            div.innerHTML = oldText;
            //console.log("No hashtags");
            break;
        }else{
            //do something if there is a hashtag
            newText = oldText.replace("#","");
            div.innerHTML =newText;
            //console.log("Hastag present");
            oldText = newText;
        }
    }   

}