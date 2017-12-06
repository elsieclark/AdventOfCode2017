'use strict';
const fs    = require('fs');
const input = fs.readFileSync('./inputs/05.txt').toString()
    .split('\n')
    .map((num) => +num);

let i = 0;
let count = 0;

while (i >= 0 && i < input.length) {
    input[i] += 1;
    i += input[i] - 1;
    count++;
}

console.log(count); // Answer is 375042