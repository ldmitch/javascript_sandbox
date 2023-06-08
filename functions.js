// FUNCTIONS: (called with brackets)
console.log("FUNCTIONS:");

greet(); // can call functions before they are declared in JavaScript
function greet() {
    console.log("Hello, world.");
} // no semi-colon for regular functions

let speak = function() { // cannot call before definition, because it is a variable not a function
    console.log("Hello, world.");
}; // semi-colon here, since this is an expession (constant declaration)
speak();

speak = function(name="Liam", time="morning") { // default values for when no argument is passed
    console.log(`Good ${time}, ${name}.`);
};
speak("Mitchell", "afternoon");

let calcArea = function(radius) {
    return Math.PI * radius**2;
};
console.log(calcArea(5));

calcArea = (radius) => { // arrow functions are just a faster/shorter way to implement functions
    return Math.PI * radius**2;
};

calcArea = radius => Math.PI * radius**2; // arrow function with an even shorter syntax (only one parameter, only one line in the body to return)
console.log(calcArea(5));


// CALLBACK FUNCTIONS: (functions called with another function used as an argument)
console.log("CALLBACK FUNCTIONS:");

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};
myFunc(
    function(value) {
        console.log(value);
    }
);
myFunc( // with arrow notation
    value => {
        console.log(value);
    }
);

let people = ["Liam", "Curtis", "An Jun", "Agishan"];
people.forEach(
    (person, index) => { // each element, followed by its index, are the default arguments passed by forEach(), and they can be named whatever
        console.log(`${index} - Hello, ${person}.`);
    }
);

const logPerson = (person, index) => {
    console.log(`${index} - Hello, ${person}.`);
};
people.forEach(logPerson);


// METHODS: (called with dot notation on objects, but still need brackets at the end)
console.log("METHODS:");

let result = "liam".toUpperCase();
console.log(result);