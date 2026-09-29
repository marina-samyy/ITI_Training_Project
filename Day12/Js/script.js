// Object 

var student = {
  name: "Marina Samy",
  age: 23,
  job: "student",
  hobby: "reading",
  books: ["youtebia", "ard zekola", "a7bbt w8da"],
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  }
};

console.log(student.name);    
console.log(student["age"]);    
student.sayHello();             


student.age = 24;
student.city = "Cairo";
console.log(student);


delete student.city;


// Functions 


function add(m, a) {
  return m + a;
}


var multiply = function (m, a) {
  return m * a;
};

// condition
function checkAge(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Child";
  }
}

// call function
function printBook(title) {
  console.log("I love reading " + title);
}

console.log(add(5, 3));
console.log(multiply(4, 6));
console.log(checkAge(student.age));


//  Loops 

for (var i = 1; i <= 5; i++) {
  console.log("Number " + i);
}

console.log("loop on array");
for (var j = 0; j < student.books.length; j++) {
  console.log((j + 1) + "- " + student.books[j]);
}


console.log(" while loop");
var count = 3;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

console.log(" do while loop ");
var pages = 1;
do {
  console.log("Reading page " + pages);
  pages++;
} while (pages <= 3);



// break and continue
for (var n = 1; n <= 10; n++) {
  if (n === 3) {
    continue; 
  }
  if (n === 7) {
    break; 
  }
  console.log(n);
}

// nested loop: 
for (var x = 1; x <= 3; x++) {
  for (var y = 1; y <= 3; y++) {
    console.log(x + " x " + y + " = " + (x * y));
  }
}


