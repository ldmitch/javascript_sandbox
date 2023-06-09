/* VARIABLE TYPES:
Number: integers, demicals (all floating point in JS)
String: regular strings
Boolean: regular booleans
Null: must be explicitly set to variables with no value (intentional lack of value)
Undefined: for variables that have not yet been defined
Object: complex data structures (arrays, dates, literals, etc.)
Symbol: used with objects
*/

/* LOOSELY-TYPED LANGUAGE:
Variables can be reassigned to different types in JavaScript
*/


// STRINGS:
console.log("STRINGS:");

let email = "liam.mitchell@uwaterloo.ca";
console.log(email);

const firstName = "Liam";
const lastName = "Mitchell";
console.log(firstName + " " + lastName);

const fullName = firstName + " " + lastName;
console.log(fullName[0]); // "L"

console.log(fullName.length); // String property
console.log(fullName.toUpperCase()); // String method (needs brackets)

let index = email.indexOf("@");
console.log(email[index]); // "@"
console.log(email.substring(index + 1)); // domain, "uwaterloo.ca"

console.log(email.lastIndexOf(".")) // finds last occurance of "."
console.log(email.slice(0, 10)); // sliced string from index 0 to 10 ("liam.mitch")
console.log(email.substring(4, 10)); // substring from index 4 to 4+10 (second argument is length from start index)
console.log(email.replace("liam.mitchell", "l5mitche")) // "l5mitche@uwaterloo.ca"

let title = "Cool Blog";
let author = "Liam";
let likes = 20;
console.log(`The blog called ${title} by ${author} has ${likes} likes.`) // notice backticks instead of quotation marks

let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes.</span>
`
console.log(html);


// NUMBERS:
console.log("NUMBERS:");

let radius = 10;
const pi = 3.14159;
console.log(radius, pi);

console.log(radius % 3); // remainder 1
console.log(pi * radius**2); // area of circle, pi * r^2
console.log(5 * (10 - 3)**2); // BEDMAS applies

likes = 10;
likes = likes + 1; // 11
likes++; // 12
console.log(likes -= 5); // 7
console.log(likes *= 10); // 70
console.log(likes /= 2); // 35

console.log(5 * "hello") // NaN


// ARRAYS:
console.log("ARRAYS:");

let people = ["liam", "curtis", "agishan"];
console.log(people);

people[3] = "an jun";
console.log(people[3]);

people.push(25); // JavaScript arrays can have different data types

console.log(people.join(", ")); // "liam, curtis, agishan, an jun, 25"
console.log(people.indexOf("liam")); // 0

people = people.concat(["jeevan", "jarren"]);
console.log(people); // ['liam', 'curtis', 'agishan', 'an jun', 25, 'jeevan', 'jarren']
console.log(people.pop()); // jarren


// NULL & UNDEFINED:
console.log("NULL & UNDEFINED:");

let age;
console.log(age, age + 3, `the age is ${age}`) // undefined NaN 'the age is undefined'

age = null;
console.log(age); // null


// BOOLEANS:
console.log("BOOLEANS:");

console.log(email.includes("@")); // true
console.log(people.includes("liam")) // true
console.log(age != null); // false
console.log(firstName == "liam") // false, it's "Liam"
console.log(firstName > "liam"); // false, lowercase letters are greater than uppercase in JavaScript

age = 25;
console.log(age == "25"); // true, strings are converted to numbers
console.log(age === "25"); // false, tripequals means strict comparison
console.log(age !== "25"); // true


// TYPE CONVERSION:
console.log("TYPE CONVERSION:");

let score = "100"; // String
score = Number(score); // Number
console.log(score + 1); // 101

console.log(Number("Hello")); // NaN
console.log(String(50)); // "50"
console.log(Boolean("Hello")); // all strings are true
console.log(Boolean(0)); // false