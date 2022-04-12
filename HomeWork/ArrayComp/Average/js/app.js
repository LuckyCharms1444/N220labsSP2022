/*
Jon Ross Richardson
n220
4-7-22
*/



function math(){

    //counter
    let count = 0;
    let count2 = 0;

    //get user input
    let user = document.getElementById("user").value;
    //console.log(user);

    //put into an array
    let ar = user.split(",");
    //console.log(ar);

    //loop that adds it all together and checks if it is a number
    for(let i = 0;i < ar.length; i++){
        if(!isNaN(ar[i])){
            count += Number(ar[i]);
            //console.log(count);
            count2++;
            //console.log(count2);
        }
    }
    //output the sum
    let sum = document.getElementById("sum");
    sum.innerHTML = "The sum is: " + count;
    //output the average
    let ave = document.getElementById("ave");

    
    let average = count / count2;
    //console.log(average);

    ave.innerHTML = "The average is: " + average; 

}