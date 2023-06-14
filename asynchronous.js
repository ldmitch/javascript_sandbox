// ASYNCHRONOUS JAVASCRIPT:
console.log("ASYNCHRONOUS JAVASCRIPT:");

console.log(1);
setTimeout(() => {
    console.log("First callback fired...")
}, 2000);
console.log(3)

const getTodos = (resource, callback) => {

    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback(request.status, undefined)
        }
    });
    request.open("GET", resource);
    request.send();
}

/* callback hell: getTodos("todos.json", (err, data) => {
    console.log("Callback fired...");
    if (err) {
        console.log(`Code ${err}, could not fetch data...`);
    } else {
        console.log(data);
    }
    getTodos("other.json", (err, data) => {
        console.log("Callback fired...");
        if (err) {
            console.log(`Code ${err}, could not fetch data...`);
        } else {
            console.log(data);
        }
    });
}); */

const getSomething = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
            // console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject(`Error getting resource: Status ${request.status}`);
            }
        });
        request.open("GET", resource);
        request.send();
    });
};

getSomething("todos.json").then((data) => {
    console.log("Promise resolved:", data);
}).catch(err => {
    console.log("Promise rejected:", err);
});