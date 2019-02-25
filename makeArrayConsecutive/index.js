'use strict';

// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.


// [input] array.integer statues

// An array of distinct non-negative integers.
// Guaranteed constraints:
// 1 ≤ statues.length ≤ 10,
// 0 ≤ statues[i] ≤ 20.

// [output] integer

// The minimal number of statues that need to be added to existing statues
// such that it contains every integer size from an interval [L, R]
// (for some L, R) and no other sizes.

const makeArrayConsecutive2 = (statues) => {
    statues.sort((a, b) => a - b);
    const gaps = [];
    for (let i  = statues[0], j = 0; i < statues[statues.length-1]; i++) {
        statues[j];
        i === statues[j] ? j++ : gaps.push(i);
        console.log(i, statues[j], gaps);
    }
    return gaps.length;
}

// const statues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const statues = [6, 2, 3, 8];
const statues = [4, 2, 7, 18]

document.getElementById('result').innerHTML = `<div>
    <p>${statues}</p>
    <p>${makeArrayConsecutive2(statues)}</p>
</div>`;
