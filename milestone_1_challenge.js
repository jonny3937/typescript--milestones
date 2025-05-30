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
console.log(canDrive("Jane", 22));
console.log(canDrive("June", 12));
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


//   tsc milestone_1_challenge.ts && milestone_1_challenge.js
