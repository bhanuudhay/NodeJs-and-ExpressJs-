// this is a synchronous approach

const { readFileSync, writeFileSync, readFile, write } = require("fs"); // basically in node js readfs is use to read the file
//jo bhi content hai usko read krna ke liya

console.log("start");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
const first1 = readFileSync("./content/second.txt"); // if encoding not provided this is output <Buffer 48 65 6c 6c 6f 20 20 74 68 69 73 20 69 73 20 73 65 63 6f 6e 64 20 74 65 78 74 20 66 69 6c 65 20 0d 0a>

console.log(first, second);
console.log(first1);

writeFileSync("./content/result-file.txt", `this is ${(first, second)} `);

writeFileSync(
  "./content/result-file.txt",
  `this is ${(first, second)} after updation `
);

writeFileSync("./content/third.txt", "hello", { flag: "a" }); // isme jeh dono mandatory hai
// we can pass third argument as a file mode ie append
// if we want some to write in filw without replcing the existing content we can use flag : a ie append

// writefilesync will create a file if file is not there and pass second argument as data to provided in file

console.log("done with the task");
console.log("starting with the next one");
