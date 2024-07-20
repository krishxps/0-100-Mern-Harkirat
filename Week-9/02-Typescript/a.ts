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
function sum(first: number,second: number): number {
    return first + second
}

console.log(sum(10,20)); // sum(10,20);

// Type inference
function isLegal(age: number) : boolean {
    if (age > 18) {
        return true;
    } else {
        return false
    }
}

console.log(isLegal(2));

//function that takes another function as input, and runs it after 1 second.
// () - Function expect no arguments and return void
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hi there");
})