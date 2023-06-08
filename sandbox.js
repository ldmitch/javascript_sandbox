/* VARIABLE TYPES:
Number: integers, demicals (all floating point in JS)
String: regular strings
Boolean: regular booleans
Null: must be explicitly set to variables with no value
Undefined: for variables that have not yet been defined
Object: complex data structures (arrays, dates, literals, etc.)
Symbol: used with objects
*/

/* LOOSELY-TYPED LANGUAGE:
Variables can be reassigned to different types in JavaScript
*/

// STRINGS:
console.log("Hello, World");

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

// NUMBERS:
