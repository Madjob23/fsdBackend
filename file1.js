const fs = require("fs"); // importing the file system module

const data = fs.readFileSync("data.txt", {
    encoding: "utf8",
}); // reading the file synchronously and giving the options argument to specify the encoding
console.log(data); // without encoding given above, it will return a buffer object and we would need to convert it to string

// const data = fs.readFileSync("data.txt");
// console.log(data.toString());

// it will create the file if it doesn't exist
fs.writeFileSync("data1.txt", data + " added some text"); // writing to a file synchronously

// appending data to a file
fs.appendFileSync("data1.txt", data + "\nappended some text");

// renaming a file
fs.renameSync("data1.txt", "data2.txt");