// tsc -b to execute the script and compile the ts file to js
// npm install -g typescript : For installing typescript
// npx tsc --init : For creating tsconfig.json file

// TypeScript Type Safety
let x: number = 1;
console.log(x);

//simple applications using these types
// Adding types to functions
function greet(firstName: string) {
    console.log("Hello " + firstName);
}

greet("Krish");

//Thing to learn - How to assign a return type to a function
function sum(first: number, second: number): number {
    return first + second;
}

console.log(sum(10, 20)); // sum(10,20);

// Type inference
function isLegal(age: number): boolean {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isLegal(2));

//function that takes another function as input, and runs it after 1 second.
// () - Function expect no arguments and return void
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function () {
    console.log("hi there");
});

//Interfaces
interface User {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    // ? - Optional
    isAdmin?: boolean;
}

function isLegalUser(user: User): boolean {
    if (user.age > 18) {
        return true;
    } else {
        return false;
    }
}

console.log(
    isLegalUser({
        firstName: "Krish",
        lastName: "Patel",
        email: "krish@gmail.com",
        age: 19,
    })
);

// Types
type Random = {
    firstName: string;
    lastName: string;
    age: number;
};

// Union types
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
    console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

// Intersection types
type Employee = {
    name: string;
    startDate: Date;
};

type Manager = {
    name: string;
    department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
    name: "Krish Patel",
    startDate: new Date(),
    department: "Software developer",
};

console.log(teamLead);

// Arrys in TypeScript
interface UserForArray {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: UserForArray[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "Krish",
    lastName: "Patel",
    age: 21
}, {
    firstName: "Jon",
    lastName: "Snow",
    age: 19
}, ]));

// Enums
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
    switch (keyPressed) {
        case Direction.Up:
            console.log("Up");
            break;
        case Direction.Down:
            console.log("Down");
            break;
        case Direction.Left:
            console.log("Left");
            break;
        case Direction.Right:
            console.log("Right");
            break;
    }
}

doSomething(Direction.Up);

// Generics
function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<number>(10));
console.log(identity<string>("Krish"));