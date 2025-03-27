const { createReadStream } = require("fs");
const stream = createReadStream("./content/big.txt", {
  highWaterMark: 3000, // isme ek bar meh itna hi data aa skta hai
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
// 2nd way diff read entire data and can halt and synchronous and blocking code
// const { readFileSync } = require("fs");

// const a1 = readFileSync("./content/big.txt", "utf8");

// console.log(a1);
