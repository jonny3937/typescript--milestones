//challenge 1
//find sum of two numbers
function addNumbers(a, b) {
    return a + b;
}
var result = addNumbers(5, 3);
console.log(result);
//challenge 2
//converting minutes to seconds
function convert(minutes) {
    return minutes * 60;
}
console.log(convert(5));
//challenge 3
//calculating perimeter
function findPerimeter(length, width) {
    return 2 * (length + width);
}
console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
//challenge 4
//find negative (boolean) yes or no
function isNegative(num) {
    return num < 0;
}
console.log(isNegative(-34));
console.log(isNegative(60));
//challenge 5
//creating a can drive challenge
function canDrive(name, age) {
    return age >= 18
        ? "".concat(name, " is old enough to drive.")
        : "".concat(name, " is not old enough to drive yet.");
}
console.log(canDrive("angela", 22));
console.log(canDrive("jane", 12));
//challenge 6
//find largest number
function largestNumber(a, b, c) {
    return Math.max(a, b, c);
}
console.log(largestNumber(3, 7, 9));
console.log(largestNumber(1, 2, 3));
//chalenge 7
//bmi calculator
function calculateBMI(weight, height) {
    var bmi = weight / (height * height);
    var roundedBMI = Math.round(bmi * 10) / 10;
    var category;
    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
    }
    else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    }
    else {
        category = "Obese";
    }
    return "Your BMI is ".concat(roundedBMI, " - ").concat(category);
}
console.log(calculateBMI(63, 1.67));
console.log(calculateBMI(95, 1.9));
console.log(calculateBMI(50, 1.6));
console.log(calculateBMI(100, 1.7));
//challenge 8
//greetings 
function greetUser(name, hour) {
    var greeting;
    if (hour >= 5 && hour <= 11) {
        greeting = "Good morning, ".concat(name, "!");
    }
    else if (hour >= 12 && hour <= 17) {
        greeting = "Good afternoon, ".concat(name, "!");
    }
    else if (hour >= 18 && hour <= 21) {
        greeting = "Good evening, ".concat(name, "!");
    }
    else if ((hour >= 22 && hour <= 24) || (hour >= 0 && hour < 5)) {
        greeting = "Good night, ".concat(name, "!");
    }
    else {
        greeting = "Hello, ".concat(name, "!");
    }
    return greeting;
}
var morningGreeting = greetUser("milan", 9);
console.log(morningGreeting);
var afternoonGreeting = greetUser("maina", 20);
console.log(afternoonGreeting);
//challenge 9
//fizzBuzzCheck
function fizzBuzzCheck(number) {
    var isDivisibleBy3 = number % 3 === 0;
    var isDivisibleBy5 = number % 5 === 0;
    if (isDivisibleBy3 && isDivisibleBy5) {
        var result_1 = "FizzBuzz";
        return result_1;
    }
    else if (isDivisibleBy3) {
        var result_2 = "Fizz";
        return result_2;
    }
    else if (isDivisibleBy5) {
        var result_3 = "Buzz";
        return result_3;
    }
    else {
        var result_4 = number.toString();
        return result_4;
    }
}
var test1 = fizzBuzzCheck(9);
console.log(test1);
var test2 = fizzBuzzCheck(25);
console.log(test2);
var test3 = fizzBuzzCheck(30);
console.log(test3);
var test4 = fizzBuzzCheck(11);
console.log(test4);
//challenge 10
//perimeter of shapes
function perimeter(shape, value) {
    var PI = 3.14;
    if (shape === "s") {
        var squarePerimeter = 4 * value;
        return squarePerimeter;
    }
    else if (shape === "c") {
        var circlePerimeter = 6.28 * value;
        return circlePerimeter;
    }
    else {
        throw new Error("Invalid shape type. Must be 's' or 'c'");
    }
}
var squareResult = perimeter("s", 7);
console.log(squareResult);
var circleResult = perimeter("c", 4);
console.log(circleResult);
//challenge 11
//sum of even numbers
function sumEvenNumbers(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
var result1 = sumEvenNumbers(3);
console.log(result1);
var result2 = sumEvenNumbers(12);
console.log(result2);
var result3 = sumEvenNumbers(8);
console.log(result3);
//challenge 12
// multiply by itself
function powerUp(num, times) {
    if (times === void 0) { times = 0; }
    var result = 1;
    if (times === 0) {
        return result;
    }
    if (times < 0) {
        num = 1 / num;
        times = -times;
    }
    for (var i = 0; i < times; i++) {
        result *= num;
    }
    return result;
}
var testing1 = powerUp(2, 3);
console.log(testing1);
var testing2 = powerUp(5, 0);
console.log(testing2);
var testing3 = powerUp(3, 4);
console.log(testing3);
var testing4 = powerUp(0);
console.log(testing4);
//challenge 13
//factorial calculator
function factorial(n) {
    var result = 1;
    if (n === 0) {
        return result;
    }
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
var test0 = factorial(0);
console.log(test0);
var testi = factorial(4);
console.log(testi);
var test6 = factorial(6);
console.log(test6);
//challenge 14
//sum of multiples
function sumMultiples(n, divisor) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        if (i % divisor === 0) {
            sum += i;
        }
    }
    return sum;
}
var sum1 = sumMultiples(10, 2);
console.log(sum1);
var sum2 = sumMultiples(15, 3);
console.log(sum2);
var sum3 = sumMultiples(7, 5);
console.log(sum3);
//challenge 15
function sumDigits(num) {
    var sum = 0;
    var remainingNumber = Math.abs(num);
    while (remainingNumber > 0) {
        var lastDigit = remainingNumber % 10;
        sum += lastDigit;
        remainingNumber = Math.floor(remainingNumber / 10);
    }
    return sum;
}
var tes1 = sumDigits(123);
console.log(tes1);
var tes2 = sumDigits(4567);
console.log(tes2);
var tes3 = sumDigits(0);
console.log(tes3);
//the end of challenges
//   tsc milestone_1_challenge.ts && milestone_1_challenge.js
