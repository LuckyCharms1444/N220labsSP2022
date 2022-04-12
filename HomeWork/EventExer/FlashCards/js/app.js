/*
Jon Ross Richardson
n220
4-11-22
*/


//array with questions and answers
let qa = [{questions: "Who is the main protaganist in Legend of Zelda?", answers: "Link"},
{questions: "Where did the two programmers meet?", answers: "Github"},{questions:
"what's the object-oriented way to get rich?", answers: "Inheritance"}];


//loop that puts buttons on the page with a data attribute
for(let i=0; i < qa.length; i++){
    //create on page
let breaks = document.createElement("br");
let but = document.createElement("button");

//put things on screen
but.innerHTML = qa[i].questions;
but.setAttribute("data-answer",qa[i].answers);
but.addEventListener("click",nextA);

//add on the page
document.body.appendChild(but);
document.body.appendChild(breaks);

}





//funtion that takes an event
function nextA(event){
let answer1 = event.target.dataset.answer;
let div = document.getElementById("dva");
div.innerHTML = answer1;
}


