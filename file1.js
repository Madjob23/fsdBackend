const fs = require("fs"); // importing the file system module
const data = fs.readFileSync("data.txt", {
    encoding: "utf8",
}); // reading the file synchronously and giving the options argument to specify the encoding
console.log(data); // without encoding given above, it will return a buffer object and we would need to convert it to string