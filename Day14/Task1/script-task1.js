// JavaScript Task

// Part 1
// 1) a new array with the same length
// 2) find()
// 3) a new array with the elements that passed the condition
// 4) undefined
// 5) arrays

// Part 2
// 1) false, map() returns a new array
// 2) true
// 3) true
// 4) true
// 5) false

// Part 3
// Q1
console.log("Part 3 Q1");
var numbers = [1, 2, 3, 4];

numbers.forEach((num) => {
    console.log(num * 2);
});

// Q2
console.log("Part 3 Q2");
var nums = [10, 25, 5, 30, 15, 40];

var result = nums.filter((num) => {
    return num > 20;
});

console.log(result);

// Q3
console.log("Part 3 Q3");
var users = [
    { name: "Ali", age: 20 },
    { name: "Sara", age: 28 },
    { name: "Omar", age: 30 }
];

var user = users.find((item) => {
    return item.age > 25;
});

console.log(user);

// Q4
console.log("Part 3 Q4");
var names = ["ali", "mona", "ahmed"];

var upperNames = names.map((name) => {
    return name.toUpperCase();
});

console.log(upperNames);

// Part 4
var fruits = ["Apple", "Banana", "Orange"];

// 1) for...of
console.log("Part 4 Q1");
for (var fruit of fruits) {
    console.log(fruit);
}

// 2) for...in
console.log("Part 4 Q2");
for (var index in fruits) {
    console.log(index);
}

// 3) forEach
console.log("Part 4 Q3");
fruits.forEach((item, i) => {
    console.log(i + " -> " + item);
});

// Part 5
// Q1 arrow function
console.log("Part 5 Q1");
var sum = (a, b) => a + b;
console.log(sum(2, 3));

// Q2 destructuring
console.log("Part 5 Q2");
var person = {
    name: "Mostafa",
    age: 25
};

var { name, age } = person;
console.log(name, age);

// Q3 template literal
console.log("Part 5 Q3");
console.log(`Hello ${name}`);

// Q4 spread operator
console.log("Part 5 Q4");
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var allNumbers = [...arr1, ...arr2];
console.log(allNumbers);

// Part 6
var students = [
    { name: "Ali", degree: 70 },
    { name: "Sara", degree: 95 },
    { name: "Ahmed", degree: 40 },
    { name: "Mona", degree: 85 },
    { name: "Omar", degree: 55 }
];

// 1) names only
console.log("Part 6 Q1");
var studentNames = students.map((student) => student.name);
console.log(studentNames);

// 2) degree 60 or more
console.log("Part 6 Q2");
var passed = students.filter((student) => student.degree >= 60);
console.log(passed);

// 3) first student above 90
console.log("Part 6 Q3");
var topStudent = students.find((student) => student.degree > 90);
console.log(topStudent);

// 4) print the names
console.log("Part 6 Q4");
students.forEach((student) => {
    console.log(student.name);
});

// Bonus
console.log("Bonus");
var bonusNumbers = [15, 10, 15, 201];

var total = bonusNumbers.reduce((acc, current) => {
    return acc + current;
}, 0);

console.log(total);
