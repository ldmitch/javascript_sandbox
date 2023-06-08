// FOR LOOPS:
console.log("FOR LOOPS:");

for(let i = 0; i < 5; i ++) {
    console.log("in loop: ", i);
}

const names = ["liam", "curtis", "agishan"];
for (let i = 0; i < names.length; i ++) {
    console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}