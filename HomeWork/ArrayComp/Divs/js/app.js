/*
Jon Ross Richardson
n220
4-11-22
*/

let objects = [{color: "FF0000", height: 100, width: 300},
    {color:"FFFF00", height: 200, width: 200},
    {color:"ff0000",height: 300, width: 100}];


    console.log(objects);

    for(let i = 0; i < objects.length; i++){
        let newDiv = document.createElement("div");
        let ob = objects[i];
        newDiv.style.backgroundColor = "#" + ob.color;
        newDiv.style.height = ob.height + "px";
        newDiv.style.width = ob.width + "px";
        document.body.appendChild(newDiv);
        console.log(newDiv);
    }