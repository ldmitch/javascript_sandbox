// FETCH API:
console.log("FECTH API:");

fetch("todos.json").then((response) => {
    console.log("Resolved:", response);
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("Rejected:", error);
});