// ASYNCHRONOUS JAVASCRIPT:
console.log("ASYNCHRONOUS JAVASCRIPT:");

const getTodos = (callback) => {
    console.log(1);
    setTimeout(() => {
        console.log("(2) Callback fired...")
    }, 2000);
    console.log(3)

    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            callback(request.status, undefined)
        }
    });
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    request.send();
}

getTodos((err, data) => {
    console.log("Callback fired...");
    if (err) {
        console.log(`Code ${err}, could not fetch data...`);
    } else {
        console.log(data);
    }
});