const eventEmmiter = require("events");

const customEmmiter = new eventEmmiter();

customEmmiter.on("response", () => {
  console.log("data received");
});
customEmmiter.on("response", () => {
  console.log("data received second time");
});

customEmmiter.on("response", (name, id) => {
  console.log(`data received from ${name} having id ${id}`);
});
customEmmiter.emit("response", "bhanu", 5);
