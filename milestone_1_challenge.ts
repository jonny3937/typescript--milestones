//challenge 1
//find sum of two numbers
function addNumbers(a: number, b: number): number {
  return a + b;
}
const result: number = addNumbers(5, 3);
console.log(result); 

//challenge 2
//converting minutes to seconds
function convert(minutes: number): number {
    return minutes * 60;
}
console.log(convert(5)); 

//challenge 3
//calculating perimeter
function findPerimeter(length: number, width: number): number {
    return 2 * (length + width);
}
console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10)); 

//challenge 4
//find negative (boolean) yes or no
function isNegative(num:number): boolean{
    return num < 0;
}
console.log(isNegative(-34));
console.log(isNegative(60));

//challenge 5
//creating a can drive challenge
function canDrive(name: string, age: number): string {
    return age >= 18 
        ? `${name} is old enough to drive.`
        : `${name} is not old enough to drive yet.`;
}
console.log(canDrive("angela", 22));  
console.log(canDrive("jane", 12));  


//challenge 6
//find largest number
function largestNumber (a: number, b: number , c: number):number {
    return Math.max( a,b,c)
}
console.log(largestNumber(3,7,9));
console.log(largestNumber(1,2,3));

//chalenge 7
//bmi calculator
function calculateBMI(weight: number, height: number): string {
    const bmi = weight / (height * height);
    const roundedBMI = Math.round(bmi * 10) / 10; 
    let category: string;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    
    return `Your BMI is ${roundedBMI} - ${category}`;
}
console.log(calculateBMI(63, 1.67)); 
console.log(calculateBMI(95, 1.9));  
console.log(calculateBMI(50, 1.6));  
console.log(calculateBMI(100, 1.7));

//challenge 8
//greetings 
function greetUser(name: string, hour: number): string {
    let greeting: string;
    if (hour >= 5 && hour <= 11) {
        greeting = `Good morning, ${name}!`;
    } else if (hour >= 12 && hour <= 17) {
        greeting = `Good afternoon, ${name}!`;
    } else if (hour >= 18 && hour <= 21) {
        greeting = `Good evening, ${name}!`;
    } else if ((hour >= 22 && hour <= 24) || (hour >= 0 && hour < 5)) {
        greeting = `Good night, ${name}!`;
    } else {
        greeting = `Hello, ${name}!`;
    }
    
    return greeting;
}
const morningGreeting: string = greetUser("milan", 9);
console.log(morningGreeting); 
const afternoonGreeting: string = greetUser("maina", 20);
console.log(afternoonGreeting);

//challenge 9
//fizzBuzzCheck
function fizzBuzzCheck(number: number): string {
    const isDivisibleBy3: boolean = number % 3 === 0;
    const isDivisibleBy5: boolean = number % 5 === 0;
    
    if (isDivisibleBy3 && isDivisibleBy5) {
        const result: string = "FizzBuzz";
        return result;
    } else if (isDivisibleBy3) {
        const result: string = "Fizz";
        return result;
    } else if (isDivisibleBy5) {
        const result: string = "Buzz";
        return result;
    } else {
        const result: string = number.toString();
        return result;
    }
}
const test1: string = fizzBuzzCheck(9);
console.log(test1);
const test2: string = fizzBuzzCheck(25);
console.log(test2);
const test3: string = fizzBuzzCheck(30);
console.log(test3);
const test4: string = fizzBuzzCheck(11);
console.log(test4);

//challenge 10
//perimeter of shapes
function perimeter(shape: string, value: number): number {
    const PI: number = 3.14;
    if (shape === "s") {
        const squarePerimeter: number = 4 * value;
        return squarePerimeter;
    } else if (shape === "c") {
        const circlePerimeter: number = 6.28 * value; 
        return circlePerimeter;
    } else {
        throw new Error("Invalid shape type. Must be 's' or 'c'");
    }
}
const squareResult: number = perimeter("s", 7);
console.log(squareResult);
const circleResult: number = perimeter("c", 4);
console.log(circleResult);

//challenge 11
//sum of even numbers
function sumEvenNumbers(num: number): number {
    let sum: number = 0;
    
    for (let i: number = 1; i <= num; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    
    return sum;
}
const result1: number = sumEvenNumbers(3);
console.log(result1);  
const result2: number = sumEvenNumbers(12);
console.log(result2); 
const result3: number = sumEvenNumbers(8);
console.log(result3);

//challenge 12
// multiply by itself
function powerUp(num: number, times: number = 0): number {
    let result: number = 1;
    if (times === 0) {
        return result;
    }
    if (times < 0) {
        num = 1 / num;
        times = -times;
    }
    for (let i: number = 0; i < times; i++) {
        result *= num;
    }
    
    return result;
}
const testing1: number = powerUp(2, 3);
console.log(testing1); 
const testing2: number = powerUp(5, 0);
console.log(testing2);
const testing3: number = powerUp(3, 4);
console.log(testing3); 
const testing4: number = powerUp(0);
console.log(testing4);

//challenge 13
//factorial calculator




//   tsc milestone_1_challenge.ts && milestone_1_challenge.js