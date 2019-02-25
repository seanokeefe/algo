'use strict';

// matrix = [[0, 1, 1, 2], 
//           [0, 5, 0, 0], 
//           [2, 0, 3, 3]]

// [input] array.array.integer matrix

// the output should be
// matrixElementsSum(matrix) = 9.

// Here's the rooms matrix with unsuitable rooms marked with 'x':

// [[x, 1, 1, 2], 
//  [x, 5, x, x], 
//  [x, x, x, x]]
// Thus, the answer is 1 + 5 + 1 + 2 = 9.



// A 2-dimensional array of integers representing a rectangular matrix of the building.

// Guaranteed constraints:
// 1 ≤ matrix.length ≤ 5,
// 1 ≤ matrix[i].length ≤ 5,
// 0 ≤ matrix[i][j] ≤ 10.

// [output] integer

// The total price of all the rooms that are suitable for the CodeBots to live in.

const matrixElementsSum1 = (matrix) => {
    return matrix.reduce((acc, m, idx) => {
        const floorSum = m.reduce((macc, i, midx) => {
            // Check against all previous rows
            for (let i = 0; i < idx; i++) {
                if (matrix[i][midx] === 0) {
                    return macc;
                }    
            }

            return macc + i;
        }, 0);
        return acc + floorSum;
    }, 0);
}

const matrixElementsSum = (matrix) => {
    return matrix.reduce((acc, m, idx) => {
        const floorSum = m.reduce((macc, i, midx) => {
            // Sum the value on first array (this would be the `top floor`)
            // and the value of the matching index of the prior array is not 0
            // if (matrix[idx - 1][midx] === 0) {
            //     return macc.value;
            // }
            console.log(acc, midx, i, macc);
            if (i === 0) {
                macc.haunted[midx] = 1;
            }  
            return {
                haunted: macc.haunted,
                value: macc.value + i,
            };
        }, {
            haunted: Array(m.length).fill(0),
            value: 0
        });
        console.log('floorSum', floorSum);
        return {
            haunted: acc.haunted.map((h, idx) => h === 1 || floorSum.haunted[idx] === 1 ? 1 : 0),
            value: acc.value + floorSum.value,
        };
    }, {
        haunted: [Array(matrix.length).fill(0)],
        value: 0
    });
}

const matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]];

const matrix2 = [[1,1,1,0], 
                [0,5,0,1], 
                [2,1,3,10]];
// 1,1,1,x
// x,5,x,x
// x,1,x,10
// output: 19
// expected: 9

{/* <p>${matrix2}</p>
<p>${matrixElementsSum(matrix2)}</p> */}

const result = matrixElementsSum(matrix);
document.getElementById('result').innerHTML = `<div>
    <p>${matrix}</p>
    <p>${result.value} ${result.haunted}</p>
    <p>${matrixElementsSum1(matrix)}</p>
    <p>${matrixElementsSum1(matrix2)}</p>
</div>`;
