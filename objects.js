// OBJECT LITERALS:
console.log("OBJECT LITERALS:");

let user = {
    name: "Liam",
    age: 19,
    email: "liam.mitchell@uwaterloo.ca",
    location: "Waterloo",
    blogs: [
        { title: "Learning Full Stack Development", author: "Liam Mitchell", date: "2023-06-08" },
        { title: "Productive Workspace Design", author: "Liam Mitchell", date: "2023-06-08" }
    ],  
    login: () => console.log("The user had logged in."), // a method (function defined by an object)
    logout: () => console.log("The user has logged out."),
    logBlogs() { // regular function
        console.log(`The user has written the following posts:`);
        this.blogs.forEach(blog => console.log(blog.title)); // "this" refers to the object a method is used on (arrow functions do not change what "this" refers to when called)
    }
};
console.log(user);
console.log(user.email);

user.location = "Vancouver";
console.log(user.location);

let age = "age";
console.log(user[age]);
user["email"] = "l5mitche@uwaterloo.ca";

user.login();
user.logout();
user.logBlogs();


// MATH OBJECT:
console.log("MATH OBJECT:");

console.log(Math);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(7.7)); // 8
console.log(Math.floor(7.7)); // 7
console.log(Math.ceil(7.1)); // 8
console.log(Math.trunc(7.434867348967)); // 7 (truncates the decimals)

const random = Math.random();
console.log(random); // between 0 and 1
console.log(Math.round(random * 100)); // rounds to a whole number, then multiplies so that it's between 0 and 100