'use strict';
const fs    = require('fs');
const input = fs.readFileSync('./inputs/02.txt').toString();

const result = input
    .split('\n')
    .map((row) => row.split(/[ \t]+/))
    .reduce((acc, row) => {
        return acc + row.reduce((acc, dividend) => {
            const divisor = row.find((o) => !(dividend % o) && dividend !== o);
            return divisor ? dividend / divisor : acc;
        }, 0);
    }, 0);

console.log(result); // Answer is 308