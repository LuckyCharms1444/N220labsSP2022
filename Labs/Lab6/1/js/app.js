


for(let i = 1; i <= 10; i++){
    console.log(i);
}


console.log("Second exercise");

for( let i = 10; i > 0; i--){
    console.log(i);
}

let ar = ["Indiana","University","Purdue", "University","Indianapolis"];


console.log("Third exercise");
for(let i = 4; i > -1; i--){
    console.log(ar[i]);
}

console.log("Fourth exercise");

for(let i = 0; i < ar.length; i++){
    console.log(ar[i].toUpperCase());
}

console.log("fifth exercise");

for(let i =0; i < ar.length; i ++){
    console.log(ar[i]);
    console.log("Yeah!");
}


console.log("Fibonocci swquence");

let last1 = 0;
let last2 = 1;
let f = 1;

for(let i = 0; i < 20; i++){
    f = last1 + last2;
    last1 = last2;
    last2 = f;

    console.log(f);
}

