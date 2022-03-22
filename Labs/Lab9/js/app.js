



function rmv(){
    let rm = "";
    let count = 0;
    let vow = ['a','e','i','o','u'];

    let user = document.getElementById("txt");
    console.log(user.value);
    let ar = user.value.split('');
    console.log(ar);

    for(let i=0; i<ar.length; i++){
        if(!(ar[i]=='a' || ar[i]=='e' || ar[i]=='i' || ar[i]=='o' || ar[i]=='u'))
        rm += ar[i];
    }
    
    console.log(rm);
    let dv = document.createElement("div");
    document.body.appendChild(dv);
    dv.append("The word without vowels is: " + rm);
}
//list of vowels 
//user input word
//convert user input into char array
//compare each character to the vowles
//if they do not match a vowel, put in new array