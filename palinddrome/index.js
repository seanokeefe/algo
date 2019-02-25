'use strict';

const checkPalindrome = (inputString) => {
    // return inputString === inputString.split('').reverse().join('');
    return inputString === [...inputString].reverse().join('');

}

const inputString = 'abba';

document.getElementById('result').textContent = `${inputString}, ${checkPalindrome(inputString)}`;