'use strict';
const fs    = require('fs');
const input = fs.readFileSync('./inputs/04.txt').toString();

const result = input
    .split('\n')
    .map(row => row.split(' '))
    .reduce((acc, row) => acc + (row.length === new Set(row).size), 0);

console.log(result);