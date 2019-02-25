'use strict';

// Given an array of integers, find the pair of adjacent elements
// that has the largest product and return that product.
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// -1000 ≤ inputArray[i] ≤ 1000

const adjacentElementsProduct1 = (inputArray) => {
    // Reduce, use idx to check location in traversing array and check tuple
    return inputArray.reduce((acc, item, idx) => {
        // 
        if (inputArray[idx + 1]) {
            const result = item * inputArray[idx + 1];
            // On first pass initilize accumlated value to product of first two array items
            if (idx === 1) {
                return item * inputArray[idx + 1];
            }
            return acc < result ? result : acc;
        }

        return acc;
    });
}

const adjacentElementsProduct = (inputArray) => {
    return inputArray.reduce((acc, item, idx) => {
        const result = item * inputArray[idx + 1];
        return acc < result ? result : acc;
    }, inputArray[0] * inputArray[1]);
}

const inputArray = [1, 6, -2, -5, 7, 3];

document.getElementById('result').innerHTML = `<div>
    <p>${inputArray}</p>
    <p>${adjacentElementsProduct(inputArray)}</p>
</div>`;
