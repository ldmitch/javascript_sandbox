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


// ASYNC & AWAIT:
console.log("ASYNC & AWAIT:");

const getOther = async () => { // returns a promise (non-blocking)
    const response = await fetch("other.json"); // waits for the fetch() to finish before assigning to response
    if (response.status !== 200) {
        throw new Error("Cannot fetch data");
    }
    const data = await response.json()
    return data;
};
getOther()
    .then(data => console.log("Data:", data))
    .catch(error => console.log("Error:", error.message));