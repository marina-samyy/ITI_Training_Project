// Data
const employees = [
  { id: 1, name: "Ahmed", age: 22, salary: 6000, department: "IT", active: true },
  { id: 2, name: "Sara", age: 27, salary: 8500, department: "HR", active: true },
  { id: 3, name: "Ali", age: 20, salary: 4500, department: "IT", active: false },
  { id: 4, name: "Mona", age: 30, salary: 10000, department: "Finance", active: true },
  { id: 5, name: "Omar", age: 24, salary: 7000, department: "Marketing", active: false },
  { id: 6, name: "Youssef", age: 29, salary: 12000, department: "IT", active: true }
];

// Part 1: Loops

// 1.1 print names with for
console.log("for loop");
for (var i = 0; i < employees.length; i++) {
  console.log(employees[i].name);
}

// 1.1 print names with for...of
console.log("for...of loop");
for (var emp of employees) {
  console.log(emp.name);
}

// 1.1 print names with forEach
console.log("forEach loop");
employees.forEach(function (e) {
  console.log(e.name);
});

// 1.2 print the index with for...in
console.log("for...in index");
for (var index in employees) {
  console.log(index);
}

// 1.3 print active employees only
console.log("Active employees");
for (var j = 0; j < employees.length; j++) {
  if (employees[j].active === true) {
    console.log(employees[j].name);
  }
}

// Part 2: ES6

// 2.1 arrow function
var welcome = (name) => "Welcome " + name;
console.log(welcome("Ahmed"));

// 2.2 destructuring
var employee = employees[0];
var { name, salary } = employee;
console.log(name, salary);

// 2.3 copy with spread and add country
var employeeCopy = { ...employee, country: "Egypt" };
console.log(employeeCopy);

// 2.4 template literal
console.log(`${employee.name} works in ${employee.department} and earns ${employee.salary}`);

// Part 3: map()

// 3.1 names only
var names = employees.map((e) => e.name);
console.log(names);

// 3.2 salaries only
var salaries = employees.map((e) => e.salary);
console.log(salaries);

// 3.3 name with department
var nameAndDept = employees.map((e) => `${e.name} (${e.department})`);
console.log(nameAndDept);

// 3.4 add 1000 to each salary, original array stays the same
var raised = employees.map((e) => ({ ...e, salary: e.salary + 1000 }));
console.log(raised);

// Part 4: filter()

// 4.1 salary bigger than 7000
console.log(employees.filter((e) => e.salary > 7000));

// 4.2 IT department
console.log(employees.filter((e) => e.department === "IT"));

// 4.3 active employees
console.log(employees.filter((e) => e.active));

// 4.4 age less than 25
console.log(employees.filter((e) => e.age < 25));

// 4.5 IT and salary bigger than 5000
console.log(employees.filter((e) => e.department === "IT" && e.salary > 5000));

// Part 5: find()

// 5.1 first salary bigger than 9000
console.log(employees.find((e) => e.salary > 9000));

// 5.2 first HR employee
console.log(employees.find((e) => e.department === "HR"));

// 5.3 first inactive employee
console.log(employees.find((e) => e.active === false));

// 5.4 id 100 does not exist, so find returns undefined
console.log(employees.find((e) => e.id === 100));

// Part 6: Mixed challenge (no normal loops)

// 6.1 names of active employees
console.log(employees.filter((e) => e.active).map((e) => e.name));

// 6.2 names of IT employees
console.log(employees.filter((e) => e.department === "IT").map((e) => e.name));

// 6.3 names with salary bigger than 7000
console.log(employees.filter((e) => e.salary > 7000).map((e) => e.name));

// 6.4 bonus is 10% of salary
var bonuses = employees.map((e) => ({ employee: e.name, bonus: e.salary * 0.1 }));
console.log(bonuses);

// 6.5 first letter of each name
console.log(employees.map((e) => e.name[0]));

// Part 7: Logical thinking
const numbers = [5, 12, 8, 20, 15, 30, 3, 40];

// 7.1 numbers bigger than 10
console.log(numbers.filter((n) => n > 10));

// 7.2 multiply each number by 2
console.log(numbers.map((n) => n * 2));

// 7.3 first number bigger than 25
console.log(numbers.find((n) => n > 25));

// 7.4 print all numbers
numbers.forEach((n) => console.log(n));

// 7.5 array of strings
console.log(numbers.map((n) => `Number is ${n}`));

// Part 8: Object challenge
const product = {
  id: 1,
  title: "Laptop",
  price: 25000,
  category: "Electronics"
};

// 8.1 print all keys
for (var key in product) {
  console.log(key);
}

// 8.2 print all values
for (var k in product) {
  console.log(product[k]);
}

// 8.3 new object with stock added
var newProduct = { ...product, stock: 15 };
console.log(newProduct);

// 8.4 destructuring
var { id, title, price, category } = product;
console.log(id, title, price, category);

// Part 9: Mini dashboard
function dashboard() {
  var activeCount = employees.filter((e) => e.active).length;
  var inactiveCount = employees.filter((e) => !e.active).length;
  var itCount = employees.filter((e) => e.department === "IT").length;
  var highest = Math.max(...employees.map((e) => e.salary));
  var firstHR = employees.find((e) => e.department === "HR");

  console.log("Total Employees : " + employees.length);
  console.log("Active Employees : " + activeCount);
  console.log("Inactive Employees : " + inactiveCount);
  console.log("IT Employees : " + itCount);
  console.log("Highest Salary : " + highest);
  console.log("First HR Employee : " + firstHR.name);
  console.log("Employee Names :");
  employees.forEach((e) => console.log(e.name));
}

dashboard();

// Bonus: reduce()

// 1 total salaries
var total = employees.reduce((sum, e) => sum + e.salary, 0);
console.log("Total salaries : " + total);

// 2 average salary
console.log("Average salary : " + total / employees.length);

// 3 highest salary
var maxSalary = employees.reduce((max, e) => (e.salary > max ? e.salary : max), 0);
console.log("Highest salary : " + maxSalary);

// 4 number of active employees
var activeTotal = employees.reduce((count, e) => (e.active ? count + 1 : count), 0);
console.log("Active employees : " + activeTotal);
