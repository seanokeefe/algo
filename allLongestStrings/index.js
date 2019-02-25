'use strict';


const commonCharacterCount = (s1, s2) => {
    return { s1, s2 };
}

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3

// [input] string s1

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s1.length ≤ 15.

// [input] string s2

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s2.length ≤ 15.

// [output] integer

document.getElementById('result').innerHTML = `<div>
    <p>${s1}, ${s2}</p>
    <p>${commonCharacterCount(s1, s2)}</p>
</div>`;
