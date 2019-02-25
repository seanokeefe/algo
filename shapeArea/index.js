'use strict';


const shapeArea = (n) => {
    // # of rows and size of largest row n + (n - 1))
    // amount to add for each one 4 * ( n - 1 )

    const area = [...new Array(n)].reduce(
        (acc, s, idx) => {
            return acc +=  idx * 4;
        }, 1);
    return area;
}

const n = 5;

document.getElementById('result').innerHTML = `<div>
    <p>${n}</p>
    <p>${shapeArea(n)}</p>
</div>`;
