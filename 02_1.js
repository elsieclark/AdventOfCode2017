'use strict';
const fs    = require('fs');
const input = fs.readFileSync('./inputs/02.txt').toString();

const result = input
    .split('\n')
    .map((row) => row.split(/[ \t]+/))
    .reduce((acc, row) =>  acc + Math.max(...row) - Math.min(...row), 0);

console.log(result); // Answer is 58975