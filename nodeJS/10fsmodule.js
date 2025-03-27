const { readFile, writeFile } = require("fs");
// in this we will use asynchronous approach

//why we use nested down because js is asynchronous ie if we write outside we don't know which one will execute first
//thats why we write it inside
// mainly call back ke under hi  likhna hai
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  {
    if (err) {
      console.log(err);
      return;
    }
    const first = result;
    readFile("./content/second.txt", "utf8", (err, result) => {
      if (err) {
        console.log(err);
      }
      const second = result;
      writeFile(
        "./content/result-file-async.txt",
        `Here is the result ${(first, second)}`,
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log("file successfully created");
        }
      );
    });
  }
});
console.log("going on next task");
