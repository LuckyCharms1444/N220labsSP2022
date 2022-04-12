/*
Jon Ross Richardson
*/

var grid = [
    [0,1,0],
    [0,0,2],
    [0,0,0],
];


//gather input from users

//input them in a function game

//1s are Xs
//2s are Os
for(let i =0; i < grid.length; i++){
    for(let j=0; j<grid[0].length; j++){
            console.log(grid[i],[j]);
            
    }
}

//check win statements

//check vertically use for loops
//check horizontally use for loops
for(let i =0; i < grid.length; i++){
    let ar = grid[i].filter(grid => grid % 1 == 0);
    if(ar ){

    }
}

