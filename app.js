sayHello() //Calls sayHello function

let fullName = {
    firstName: 'Charles',
    lastName: 'Smith',
    age: 21
};
checkAge()
fullName = {
    firstName: 'Abby',
    lastName: 'Doe',
    age: 27
};
checkAge()
fullName = {
    firstName: 'James',
    lastName: 'White',
    age: 18
};
checkAge()
fullName = {
    firstName: 'John',
    lastName: 'Black',
    age: 17
};
checkAge()
const numStates = (50);
let x = add(5, 4); //This calls the val function and inputs 5,4 in the num1 and num2 slots on the function
console.log(x);

var vegetables = ['Asparagus', 'Broccoli', 'Corn']

for (i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i])
}

let pet = {
    name: 'Callie',
    breed: 'Golden Retriever'
};
console.log(pet.name + ' ' + pet.breed)


var people = {
    person1: {
        name: 'Keelan',
        age: 21
    }
};


getLength('Hello World')


function getLength(a) {
    let x = a.length
    if (x % 2 == 0)
        return true;
    else
        return false;


};

function add(num1, num2) { //This is a function that lets me reuse code
    return num1 + num2;
};

function sayHello() {
    alert('Hello World')
};

function checkAge(x, y) {
    var x = fullName.firstName
    var y = fullName.age

    if (y < 21) {
        alert("Sorry " + x + ", you aren't old enough to view this page!");
    } else {
        console.log(x + " is above 21")
    }
};

