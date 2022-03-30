/*
Jon Ross Richardson
n220
*/


function calcBill(){
    //get element on the page
    let bill = document.getElementById("bill");

    //get the value on the page
    let billConv = Number(bill.value);
    let tipper = 0.2;
    //Math to get the correct answer
    let tip = billConv * tipper;
    //output on page of tip
    console.log("Tip is: " + tip);
    //math to get the bill
    let totBill = billConv+tip;
    //output the entire bill
    console.log("Total bill is: " + totBill);
}