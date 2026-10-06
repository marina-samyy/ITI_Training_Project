var person = {
    fullName: 'Marina Samy',
    age: 23,
    gender: 'Female',
    job: 'Developer',
    salary: 20000,
    city: 'Cairo',
    isStudent: true,
    husband: {
        fullName: 'undefined',
        age: 0,
        gender: 'Male',
        child: {
            fullName: 'undefined',
            age: 0,
            gender: 'Male'
        }
    },
    eat: function(meal) {
        console.log(`Eating: ${meal}`);
    }
};

console.log(person);
console.log(person.husband.fullName);
person.eat('koshri');

