// QUERY BY CLASS AND TAG:
console.log("QUERY BY CLASS AND TAG:");

const para = document.querySelector(".para");
console.log(para);

const paras = document.querySelectorAll("p");
console.log(paras);
paras.forEach(para => {
    console.log(para);
});

const errors = document.querySelectorAll(".error");
errors.forEach(error => {
    console.log(error);
});