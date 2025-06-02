
//chalemge 1
//sum of ppositive numbers
function sumOfPositives(numbers: number[]): number {
  let sum: number = 0;

  for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }

  return sum;
}
const sum: number = sumOfPositives([1, -3, 5, -2, 9, -8]);
console.log(sum);

//challenge 2
//find maximum number
function findMax(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Array must not be empty");
  }

  let max: number = numbers[0];

  for (let i: number = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}
const maxValue: number = findMax([3, 7, 2, 9, 5]);
console.log(maxValue);

//challenge 3
//finding winner
interface Candidate {
  name: string;
  votes: number;
}
function findWinner(candidates: Candidate[]): Candidate {
  if (candidates.length === 0) {
    throw new Error("Candidates array must not be empty");
  }
  let winner: Candidate = candidates[0];
  for (let i: number = 1; i < candidates.length; i++) {
    if (candidates[i].votes > winner.votes) {
      winner = candidates[i];
    }
  }
  return winner;
}
const candidates: Candidate[] = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 },
];
const winner: Candidate = findWinner(candidates);
console.log(winner);

//challenge 4
//find longest word
function findLongestWord(words: string[]): string {
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));

//challenge 5
// Count Properties

function countProperties(obj: object): number {
  let count = 0;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}

console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));

//challnge 6
//Filter by Length

function filterByLength(words: string[], minLength: number): string[] {
  const result: string[] = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      result.push(words[i]);
    }
  }
  return result;
}

console.log(filterByLength(["english", "spanish", "earthist", "religion", "unbelieveable"], 5));

//challenge 7
//sum of even numbers
function sumEvenNumbers(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));

//challenge 8
//diffrent between sum of even and add numbers
function differenceEvenOdd(numbers: number[]): number {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenSum += numbers[i];
    } else {
      oddSum += numbers[i];
    }
  }
  return evenSum - oddSum;
}

console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));

//challenge 9
//count truthy
function countTruthy(obj: Record<string, any>): number {
  let count = 0;
  for (const key in obj) {
    if (obj[key]) {
      count++;
    }
  }
  return count;
}

console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));

//challenge 10
//average of numbers
function average(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(average([2, 4, 6, 8]));
console.log(average([]));

//challenge 11
//linear search
function linearSearch<lib>(arr: lib[], value: lib): number {
  for (let i = 0; i < arr.length; i++) {
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
function reverseLinearSearch(
  arr: number[] | string[] | boolean[],
  value: number | string | boolean
): number {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) return i;
  }
  return -1;
}
console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7));
console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10));
console.log(reverseLinearSearch(["a", "b", "a", "c"], "a"));
console.log(reverseLinearSearch([true, false, true], false));

//challenge 13
//linear search all
function linearSearchAll(
  array: number[] | string[] | boolean[],
  value: number | string | boolean
): number[] {
  const indices: number[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      indices.push(i);
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
function countOccurrences(arr: string[]): Record<string, number> {
    const countObject: Record<string, number> = {};
    for (let i = 0; i < arr.length; i++) {
        const currentString = arr[i];
        if (countObject[currentString] === undefined) {
            countObject[currentString] = 1;
        } else {
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
function removeDuplicates(
  arr: number[] | string[] | boolean[]
): number[] | string[] | boolean[] {
  const uniqueElements: number[] | string[] | boolean[] = [];
  const seen = new Set<number | string | boolean>();
  for (const item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      uniqueElements.push();
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
function mostFrequent(
  arr: number[] | string[] | boolean[]
): number | string | boolean {
  if (arr.length === 0) {
    throw new Error("Cannot find most frequent element in empty array");
  }

  const frequencyMap = new Map<string, number>();
  let maxCount = 0;
  let mostFrequentValue = arr[0];

  for (const item of arr) {
    const key = String(item);
    const currentCount = (frequencyMap.get(key) || 0) + 1;
    frequencyMap.set(key, currentCount);

    if (currentCount > maxCount) {
      maxCount = currentCount;
      mostFrequentValue = item;
    }
  }

  return mostFrequentValue;
}
console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));
console.log(mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"])); 
console.log(mostFrequent([true, false, true, false, false]));
console.log(mostFrequent([1])); 

//    tsc milestone_2_challenge.ts && milestone_2_challenge.js
