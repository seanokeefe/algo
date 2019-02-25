'use strict';

// Given a sequence of integers as an array, determine whether it is possible
// to obtain a strictly increasing sequence by removing no more than one element
// from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing
// if a0 < a1 < ... < an. Sequence containing only one element is also considered
// to be strictly increasing.

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

// [input] array.integer sequence

// Guaranteed constraints:
// 2 ≤ sequence.length ≤ 105,
// -105 ≤ sequence[i] ≤ 105.

// [output] boolean

// Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.

// Brute force, create each sub array and then check each for increasing sequence,
// too long
const almostIncreasingSequence = (sequence) => {
    return sequence.some((s, idx) => {
        // create subArray by removing index item
        const subArray = Array.from(sequence);
        subArray.splice(idx, 1);
        const res = subArray
            .reduce((acc, a, idx) => {
                // check for end of array before checking next element
                return subArray[idx + 1] ? acc && a < subArray[idx + 1] : acc;
            }, true);
        return res;
    });
}

// If there is only one element out of ascending order than array is almost increasing
const almostIncreasingSequenceImproved = (sequence) => {
    // short circuit quick lookups
    if (sequence.length <= 2) {
        return true;
    }

    if (sequence[0] === sequence[1] && sequence[sequence.length-1] === sequence[sequence.length-2]) {
        return false;
    }

    const outOfOrderElements = sequence.reduce((acc, s, idx) => {
        // check only after first element
        // add when element decreasing
        if (s <= sequence[idx - 1]) {
            return acc.concat(idx);
        }

        if (
            // check if at least one out of order element has already been found
            acc.length >= 1
            // check against the item prior out of order item
            // to catch case where two ascending sequences are appended out of order
            && (s <= sequence[acc[0] - 1] && acc[0] !== 1)
            // ignore last element
            && idx !== sequence.length - 1
        ) {
            return acc.concat(idx);
        }
        
        if (
            // check if at least one out of order element has already been found and it is not the first one
            acc.length >= 1
            && acc[0] !== 1
            // check last element
            && idx === sequence.length - 1
            // check against the item prior out of order item
            && (s < sequence[acc[0] - 2])
        ) {
            return acc.concat(idx);
        }


        return acc;
    }, []);

    // No items found out of sequence
    if (outOfOrderElements.length === 0 ) {
        return true;
    }

    // Multiple items were found out of sequence
    if (outOfOrderElements.length > 1) {
        return false;
    }

    // The only item was the first or last item
    if (outOfOrderElements[0] === 1 || outOfOrderElements[0] === sequence.length - 1) {
        return true;
    }

    // only one item was out of sequence, check against start and end of sequence for off by one errors
    return sequence[0] < sequence[outOfOrderElements[0]]
    && sequence[outOfOrderElements[0]] < sequence[sequence.length - 1];
}

const sequence = [1, 2, 3, 4]; // true
const sequence1 = [1, 3, 2, 4, 10, 30, 200]; // true
const sequence2 = [1, 3, 2, 4]; // true
const sequence3 = [1, 2, 1, 2] // false
const sequence4 = [1, 2, 3, 4, 3, 6]; // true
const sequence5 = [1, 1, 3, 4, 4]; // false
const sequence6 = [10, 1, 2, 3, 4, 5]; // true
const sequence7 = [10, 50, 60, 20, 30, 70]; // false
const sequence8 = [1, 2, 5, 3, 5]; // true
const sequence9 = [1, 3, 2] // true
const sequence10 = [3, 6, 5, 8, 10, 20, 15] // false
const sequence11 = [10, 1, 2, 3, 4, 5, 6, 1] // false
const sequence12 = [1, 4, 5, 2, 3] // false
const sequence13 = [1, 2, 3, 4, 99, 5, 6] // true

document.getElementById('result').innerHTML = `<div style="display: flex">
    <div>almostIncreasingSequence - 
        ${
        // <br />${sequence}: ${almostIncreasingSequence(sequence)}
        // <br />${sequence1}: ${almostIncreasingSequence(sequence1)}
        // <br />${sequence2}: ${almostIncreasingSequence(sequence2)}
        // <br />${sequence3}: ${almostIncreasingSequence(sequence3)}
        // <br />${sequence4}: ${almostIncreasingSequence(sequence4)}
        // <br />${sequence5}: ${almostIncreasingSequence(sequence5)}
        // <br />${sequence6}: ${almostIncreasingSequence(sequence6)}
        // <br />${sequence7}: ${almostIncreasingSequence(sequence7)}
        ' '
        }
        <br />${sequence}: ${almostIncreasingSequence(sequence)}
        <br />${sequence1}: ${almostIncreasingSequence(sequence1)}
        <br />${sequence2}: ${almostIncreasingSequence(sequence2)}
        <br />${sequence3}: ${almostIncreasingSequence(sequence3)}
        <br />${sequence4}: ${almostIncreasingSequence(sequence4)}
        <br />${sequence5}: ${almostIncreasingSequence(sequence5)}
        <br />${sequence6}: ${almostIncreasingSequence(sequence6)}
        <br />${sequence7}: ${almostIncreasingSequence(sequence7)}
        <br />${sequence8}: ${almostIncreasingSequence(sequence8)}
        <br />${sequence9}: ${almostIncreasingSequence(sequence9)}
        <br />${sequence10}: ${almostIncreasingSequence(sequence10)}
        <br />${sequence11}: ${almostIncreasingSequence(sequence11)}
        <br />${sequence12}: ${almostIncreasingSequence(sequence12)}
        <br />${sequence13}: ${almostIncreasingSequence(sequence13)}
    </div>
    <div>almostIncreasingSequenceImproved - 
        ${
        // <br />${sequence}: ${almostIncreasingSequenceImproved(sequence)}
        // <br />${sequence1}: ${almostIncreasingSequenceImproved(sequence1)}
        // <br />${sequence2}: ${almostIncreasingSequenceImproved(sequence2)}
        // <br />${sequence3}: ${almostIncreasingSequenceImproved(sequence3)}
        // <br />${sequence4}: ${almostIncreasingSequenceImproved(sequence4)}
        // <br />${sequence5}: ${almostIncreasingSequenceImproved(sequence5)}
        // <br />${sequence6}: ${almostIncreasingSequenceImproved(sequence6)}
        // <br />${sequence7}: ${almostIncreasingSequenceImproved(sequence7)}
        ' '
        }
        <br />${sequence}: ${almostIncreasingSequenceImproved(sequence)}
        <br />${sequence1}: ${almostIncreasingSequenceImproved(sequence1)}
        <br />${sequence2}: ${almostIncreasingSequenceImproved(sequence2)}
        <br />${sequence3}: ${almostIncreasingSequenceImproved(sequence3)}
        <br />${sequence4}: ${almostIncreasingSequenceImproved(sequence4)}
        <br />${sequence5}: ${almostIncreasingSequenceImproved(sequence5)}
        <br />${sequence6}: ${almostIncreasingSequenceImproved(sequence6)}
        <br />${sequence7}: ${almostIncreasingSequenceImproved(sequence7)}
        <br />${sequence8}: ${almostIncreasingSequenceImproved(sequence8)}
        <br />${sequence9}: ${almostIncreasingSequenceImproved(sequence9)}
        <br />${sequence10}: ${almostIncreasingSequenceImproved(sequence10)}
        <br />${sequence11}: ${almostIncreasingSequenceImproved(sequence11)}
        <br />${sequence12}: ${almostIncreasingSequenceImproved(sequence12)}
        <br />${sequence13}: ${almostIncreasingSequenceImproved(sequence13)}
    </div>
</div>`;
