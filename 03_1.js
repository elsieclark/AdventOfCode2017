'use strict';
const fs    = require('fs');
const input = +fs.readFileSync('./inputs/03.txt').toString();

// Get next odd square number
const nextOddSqrt = Math.ceil((Math.sqrt(input) + 1) / 2) * 2 - 1;

// Distance between that ring and the center
const ringNumber = Math.floor(nextOddSqrt / 2);

// Calculate distance along each dimension
const result = ringNumber + Math.abs((nextOddSqrt * nextOddSqrt - input) % (nextOddSqrt - 1) - ringNumber);

// Without check, fails for 1
console.log(input === 1 ? 0 : result);