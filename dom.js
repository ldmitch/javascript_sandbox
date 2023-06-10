// QUERY BY CLASS AND TAG:
console.log("QUERY BY CLASS AND TAG:");

let para = document.querySelector(".para");
console.log(para);

const paras = document.querySelectorAll("p");
console.log(paras);
paras.forEach(paraInv => {
    console.log(paraInv);
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


// UPDATING HTML:
console.log("UPDATING HTML:");

para = document.querySelector("p"); // first paragaph tag on the page
console.log(para.innerText); // "Paragraph tag exists here."
para.innerText = "Paragraph text has been changed.";
para.innerText += " This is the new text.";
console.log(para.innerText);

paras.forEach(paraInv => {
    console.log(paraInv.innerText);
    paraInv.innerText += " (extra text)";
});

const content = document.querySelector("div.content");
console.log(content.innerHTML);
content.innerHTML += "<h2>new h2 added to this div...</h2>";

const names = ["Liam", "Curtis", "An Jun", "Agishan"];
const peopleList = document.querySelector("ul.names");
names.forEach(name => {
    peopleList.innerHTML += `<li>${name}</li>`;
});


// UPDATING TAG ATTRIBUTES:
console.log("UPDATING TAG ATTRIBUTES:");

const link = document.querySelector("a");
console.log(link.getAttribute("href")); // URL to my GitHub profile
link.setAttribute("href", "https://github.com/");
console.log(link.getAttribute("href"));

console.log(peopleList.getAttribute("class"));

const divError = document.querySelector("div.error");
divError.setAttribute("class", "success");
divError.innerText = "Success div right here"
console.log(divError.getAttribute("class"));


// STYLING:
console.log("STYLING:");

divError.setAttribute("style", "background-color: green; color: white;");
divError.setAttribute("style", "background-color: green;"); // removes the previous styling, so text is set back to black

const title = document.querySelector("h1#page-title");
console.log(title.style);
title.style.margin = "50px";
title.style.textAlign = "center";
title.style.color = "steelblue"; // no longer resets previous styling
title.style.margin = ""; // removes margin