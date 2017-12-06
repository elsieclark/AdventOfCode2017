'use strict';
const fs    = require('fs');
const input = +fs.readFileSync('./inputs/03.txt').toString();

const grid = [[1]];

// Use triangular numbers to maintain position in array
let triNumber = 0;
let triIndex = 1;

let val = 0;
let i = 0;
let x = 0;
let y = 0;

while (val <= input) {
    const triThis = Math.floor(1+i/2);
    if (triThis > triNumber) {
        triNumber += triIndex;
        triIndex++;
    }
    const inUpper = i++ > triNumber * 2 - triIndex;

    x += inUpper ? 0 : (triIndex % 2 ? 1 : -1);
    y += inUpper ? (triIndex % 2 ? 1 : -1) : 0;

    val = 0;
    for (let j = 0; j < 9; j++) {
        const relX = x + j%3 - 1;
        grid[relX] = grid[relX] ? grid[relX] : [];
        val += (j === 4) ? 0 : ~~grid[relX][y + Math.floor(j/3) - 1];
    }
    grid[x][y] = val;
}

console.log(val); // Answer is 369601
