const ul = document.querySelector(".people");

const people = ["Liam", "Curtis", "An Jun", "Agishan"];

let html = ``;

people.forEach(
    person => {
        html += `<li style="color: purple">${person}</li>`;
    }
);

ul.innerHTML = html;