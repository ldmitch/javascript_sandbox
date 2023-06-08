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