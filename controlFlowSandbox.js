// FOR LOOPS:
console.log("FOR LOOPS:");

for(let i = 0; i < 5; i ++) {
    console.log("in loop:", i);
}

const names = ["liam", "curtis", "agishan"];
for (let i = 0; i < names.length; i ++) {
    console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}


// WHILE LOOPS:
console.log("WHILE LOOPS:");

let i = 0;
while(i < 5) {
    console.log("in loop:", i);
    i ++;
}

i = 0;
while (i < names.length) {
    console.log(names[i]);
    i ++;
}

i = 5;
do {
    console.log(i);
} while (i < 5)

while (i < 10) {
    console.log(i);
    if (i == 8) {
        break;
    }
    i ++;
}


// CONDITIONAL STATEMENTS:
console.log("CONDITIONAL STATEMENTS:")

age = 30;
if (age > 20) {
    console.log("old");
}

if (names.length < 5) {
    console.log(names);
}

let password = "pass123";
if (password.length >= 16) {
    console.log("That is a strong password.")
} else if (password.length >= 8) {
    console.log("That password is long enough.");
} else {
    console.log("Enter a longer password.");
}

password = "uyg&^5rf56Ffa76WW!#gr";
if (password.length >= 12 && (password.includes("!") || password.includes("@")) && !password.toLowerCase().includes("pass")) {
    console.log("That is a strong password.");
}


// SWITCH STATEMENTS:
console.log("SWITCH STATEMENTS:");

const grade = "D";

switch(grade) {
    case "A":
        console.log("You got an A.");
        break;
    case "B":
        console.log("You got a B.");
        break;
    case "C":
        console.log("You got a C.");
        break;
    case "D":
        console.log("You got a D.");
        break;
    default:
        console.log("Not a valid grade.")
}


// BLOCK SCOPE:
console.log("BLOCK SCOPE:");

let num = 30;
if (true) {
    console.log(num); // 30
}
if (true) {
    // console.log(num); cannot access, since the variable is initialized again in this scope
    let num = 40;
    console.log(num); // 40
}
console.log(num); // 30