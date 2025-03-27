const { readFile } = require("fs");

console.log("task start");

readFile("./content/first.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(res);
  console.log("task  completed");
});

console.log("next task begin");

