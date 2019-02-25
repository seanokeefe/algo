'use strict';


const allLongestStrings = (inputArray) => {
    return inputArray.reduce((acc, i) => {
        // Check if =item is shorter than first temp array element.
        if (acc[0] && acc[0].length > i.length) {
            return acc;
        }
        
        // Add to temp array when item is the same first temp array element.
        if (acc[0] && acc[0].length === i.length) {
            return acc.concat(i);
        }

        // Default to create a new temp array, item is larger than previous elements
        return [].concat(i);
    }, [])
}

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

// [input] array.string inputArray

// A non-empty array.

// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 10.

// [output] array.string

// Array of the longest strings, stored in the same order as in the inputArray.

// inputArray: ["aba", 
//  "aa", 
//  "ad", 
//  "vcd", 
//  "aba"]
// Expected Output:
// ["aba", 
//  "vcd", 
//  "aba"]

// inputArray: ["aa"]
// Expected Output: ["aa"]

// inputArray: ["abc", 
//  "eeee", 
//  "abcd", 
//  "dcd"]
// Expected Output:
// ["eeee", 
//  "abcd"]

// inputArray: ["a", 
//  "abc", 
//  "cbd", 
//  "zzzzzz", 
//  "a", 
//  "abcdef", 
//  "asasa", 
//  "aaaaaa"]
// Expected Output:
// ["zzzzzz", 
//  "abcdef", 
//  "aaaaaa"]


const inputArray = ["aba", "aa", "ad", "vcd", "aba"];
const inputArray2 = ["aa"];
const inputArray3 = ["abc", "eeee", "abcd", "dcd"];
const inputArray4 = ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"];


document.getElementById('result').innerHTML = `<div>
    <p>${inputArray}</p>
    <p>${allLongestStrings(inputArray)}</p>
    <p>${inputArray2}</p>
    <p>${allLongestStrings(inputArray2)}</p>
    <p>${inputArray3}</p>
    <p>${allLongestStrings(inputArray3)}</p>
    <p>${inputArray4}</p>
    <p>${allLongestStrings(inputArray4)}</p>
</div>`;
