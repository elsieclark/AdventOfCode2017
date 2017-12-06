'use strict';
const fs    = require('fs');
const input = fs.readFileSync('./inputs/05.txt').toString()
    .split('\n')
    .map((num) => +num);

let i = 0;
let count = 0;

while (i >= 0 && i < input.length) {
    const jump = input[i] < 3 ? 1 : -1;
    input[i] += jump;
    i += input[i] - jump;
    count++;
}

console.log(count); // Answer is 28707598