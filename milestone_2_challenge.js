/// <reference lib="es2015" /> 
// the reference  will return the index of the value if found, or -1 if not found.
//chalemge 1
//sum of ppositive numbers
function sumOfPositives(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    return sum;
}
var sum = sumOfPositives([1, -3, 5, -2, 9, -8]);
console.log(sum);
//challenge 2
//find maximum number
function findMax(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array must not be empty");
    }
    var max = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
var maxValue = findMax([3, 7, 2, 9, 5]);
console.log(maxValue);
function findWinner(candidates) {
    if (candidates.length === 0) {
        throw new Error("Candidates array must not be empty");
    }
    var winner = candidates[0];
    for (var i = 1; i < candidates.length; i++) {
        if (candidates[i].votes > winner.votes) {
            winner = candidates[i];
        }
    }
    return winner;
}
var candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 },
];
var winner = findWinner(candidates);
console.log(winner);
//challenge 4
//find longest word
function findLongestWord(words) {
    var longest = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));
//challenge 5
// Count Properties
function countProperties(obj) {
    var count = 0;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++;
        }
    }
    return count;
}
console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));
//challnge 6
//Filter by Length
function filterByLength(words, minLength) {
    var result = [];
    for (var i = 0; i < words.length; i++) {
        if (words[i].length >= minLength) {
            result.push(words[i]);
        }
    }
    return result;
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));
//challenge 7
//sum of even numbers
function sumEvenNumbers(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }
    return sum;
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
//challenge 8
//diffrent between sum of even and add numbers
function differenceEvenOdd(numbers) {
    var evenSum = 0;
    var oddSum = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenSum += numbers[i];
        }
        else {
            oddSum += numbers[i];
        }
    }
    return evenSum - oddSum;
}
console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));
//challenge 9
//count truthy
function countTruthy(obj) {
    var count = 0;
    for (var key in obj) {
        if (obj[key]) {
            count++;
        }
    }
    return count;
}
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));
//challenge 10
//average of numbers
function average(numbers) {
    if (numbers.length === 0)
        return 0;
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
console.log(average([2, 4, 6, 8]));
console.log(average([]));
//challenge 11
//linear search
function linearSearch(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([5, 3, 7, 1, 4], 7));
console.log(linearSearch([5, 3, 7, 1, 4], 10));
console.log(linearSearch(["apple", "banana", "orange"], "banana"));
//challenge 12
//reverse linear search
function reverseLinearSearch(arr, value) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7));
console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10));
console.log(reverseLinearSearch(["a", "b", "a", "c"], "a"));
console.log(reverseLinearSearch([true, false, true], false));
//challenge 13
//linear search all
function linearSearchAll(arr, value) {
    var indices = [];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            indices[count] = i;
            count++;
        }
    }
    return indices;
}
console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7));
console.log(linearSearchAll([5, 3, 7, 1, 4], 10));
console.log(linearSearchAll(["a", "b", "a", "c"], "a"));
console.log(linearSearchAll([true, false, true], true));
//challenge 14
// count occorrence
function countOccurrences(arr) {
    var countObject = {};
    for (var i = 0; i < arr.length; i++) {
        var currentString = arr[i];
        if (countObject[currentString] === undefined) {
            countObject[currentString] = 1;
        }
        else {
            countObject[currentString]++;
        }
    }
    return countObject;
}
console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]));
console.log(countOccurrences(["a", "b", "a", "c", "b", "a", "b"]));
console.log(countOccurrences([]));
//chalenge 15
//remove duplicates
function removeDuplicates(arr) {
    var uniqueElements = [];
    var seen = new Set();
    var uniqueIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        var currentItem = arr[i];
        if (!seen.has(currentItem)) {
            seen.add(currentItem);
            uniqueElements[uniqueIndex] = currentItem;
            uniqueIndex++;
        }
    }
    return uniqueElements;
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b']));
console.log(removeDuplicates([true, false, true, false]));
console.log(removeDuplicates([]));
//challenge 16
// most frequence
function mostFrequent(arr) {
    var frequencyMap = {};
    var maxCount = 0;
    var mostFrequentValue = arr[0];
    for (var i = 0; i < arr.length; i++) {
        var key = String(arr[i]);
        frequencyMap[key] = (frequencyMap[key] || 0) + 1;
        if (frequencyMap[key] > maxCount) {
            maxCount = frequencyMap[key];
            mostFrequentValue = arr[i];
        }
    }
    return mostFrequentValue;
}
console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));
console.log(mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]));
console.log(mostFrequent([true, false, true, false, false]));
console.log(mostFrequent([1]));
//    tsc milestone_2_challenge.ts && milestone_2_challenge.js
