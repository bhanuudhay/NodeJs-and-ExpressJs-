console.log("first");
setInterval(() => {
  console.log("second");
}, 1000);

console.log("third");

// output
// first
// third
// second
// second like this infinite times
