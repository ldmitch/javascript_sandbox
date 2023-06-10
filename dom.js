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


// QUERY BY ID, CLASS NAME, AND TAG NAME:
console.log("QUERY BY ID, CLASS NAME, AND TAG NAME:");

console.log(document.getElementById("page-title"));
console.log(document.getElementsByClassName("error"));
console.log(document.getElementsByTagName("p"));