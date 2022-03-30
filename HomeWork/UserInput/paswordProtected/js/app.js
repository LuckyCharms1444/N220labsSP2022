/*
Jon Ross Richardson
*/


//create function
function userPass(){

    //get elements in code
    let userN = document.getElementById("user");
    let passW = document.getElementById("pass");

    //have the password and username
    let Ruser = "Username";
    let Rpass = "Password";
    

    //compare what user entered vs what it should be
    if((Ruser == userN.value ) && (Rpass == passW.value)){
        //output if correct
        document.getElementById("error").innerHTML="Success! You've entered the Matrix";
    }else{
        //output if wrong
        document.getElementById("error").innerHTML="Wrong Information";
    }
    //console.log(userN.value);
    //console.log(passW.value);
}
