// ASYNCHRONOUS JAVASCRIPT:
console.log("ASYNCHRONOUS JAVASCRIPT:");

console.log(1);
setTimeout(() => {
    console.log("(2) Callback fired...")
}, 2000);
console.log(3)

const request = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
    } else if (request.readyState === 4) {
        console.log("Status code:", request.status)
    }
});
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();