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
function findMax(a, b, c) {
    return Math.max(a, b, c);
}
console.log(findMax(2, 3, 4));
//    tsc milestone_1_challenge.ts && milestone_1_challenge.js
