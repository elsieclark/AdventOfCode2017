'use strict';
const fs    = require('fs');
const input = +fs.readFileSync('./inputs/03.txt').toString();

let triNumber = 0;
let triIndex = 1;
const grid = [[1]];

let val;
let i = 1;
let x = 0;
let y = 0;

/*
i    triThis    trigger    inUpper    %2   Dir
0    0          0    0,1   0,
1    0          1 => 1,2   0, No
2    1          0          1, Yes
3    1          1 => 3,3   1, No
4    2
5    2
6    3
7    3

i  Next  triThis  triNumber  triInd
0
1  Right 0      * 1
2  Up    1        2
3  Left  1      * 3
4  Left  2        3
5  Down  2        3
6  Down  3        6
7  Right 3      * 6
8  Right 4        6
9  Right 4        6
10 Up
11 Up




*/

while (true) {
    const triThis = Math.floor(i/2);
    if (triThis > triNumber) {
        triNumber += triIndex;
        triIndex++;
    }
    const inUpper = i > triNumber + triIndex - 1;

    x += inUpper ? 0 : (triIndex % 2 ? 1 : -1);
    y += inUpper ? (triIndex % 2 ? 1 : -1) : 0;

    val = 0;
    for (let j = -1; j < 2; j++) {
        for (let k = -1; k < 2; k++) {
            if (!grid[x+j]) {
                grid[x+j] = [];
            }
            val += (j === 0 && k === 0) ? 0 : ~~grid[x+j][y+k];
        }
    }
    //console.log(i, val, grid[0][0]);

    if (val > input) {
        break;
    }

    if (inUpper) {
        if (triIndex % 2) {
            console.log(i, x, y, 'Up', val)
        } else {
            console.log(i, x, y, 'Down', val)
        }
    } else {
        if (triIndex % 2) {
            console.log(i, x, y, 'Right', val)
        } else {
            console.log(i, x, y, 'Left', val)
        }
    }

    grid[x][y] = val;
    i++
}

console.log(val, grid[0][0], grid[1][0], grid[1][1], grid[0][1]);

/*
Need:
value => direction

Have:
value => triangle number
value => triangle index


       i                  triInd   triNo
R x 1  1         1-2      1        1
U x 1  2
L x 2  3 4       3-6      2        3
D x 2  5 6
R x 3  7 8 9     7-12     3        6
U x 3  10 11 12

7,  3 =>
11, 3 =>

1
3
6
10
15


// Get next odd square number
const nextOddSqrt = Math.ceil((Math.sqrt(input) + 1) / 2) * 2 - 1;

// Distance between that ring and the center
const ringNumber = Math.floor(nextOddSqrt / 2);

// Calculate distance along each dimension
const result = ringNumber + Math.abs((nextOddSqrt * nextOddSqrt - input) % (nextOddSqrt - 1) - ringNumber);

// Without check, fails for 1
console.log(input === 1 ? 0 : result);*/