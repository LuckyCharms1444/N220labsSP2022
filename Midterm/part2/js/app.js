/*
Jon Ross Richardson
3.1.22
n220
*/


//function that changes the inner div
function no(){

    //create var that gets the element by ID
    let div = document.getElementById("yes");
    
    //console.log(div.innerHTML);

    //change the yes, if yes change the no
    if(div.innerHTML == "yes"){
        div.innerHTML = "no";
    }else{
        div.innerHTML = "yes";
    }

}