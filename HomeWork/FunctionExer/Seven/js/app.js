/*
Jon Ross Richardson
3-31-22
n220
*/

//function that sees if a number is divisible
function mod(){
    //get div on page
    let div = document.getElementById("out");
    //get number
    let num = document.getElementById("num").value;

    //console.log(num%7);
    //check to see if number is or not
    if((num % 7) == 0){
        //if true, outpt true
        div.innerHTML = "True";
    }else{
        //if false output false
        div.innerHTML = "False";
    }

}