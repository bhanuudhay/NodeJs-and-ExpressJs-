const os = require("os");
// console.log(os.version());
// console.log(os.machine());

// info about current user
const user = os.userInfo();
console.log(user);

//method return the system uptime in seconds

console.log(os.uptime() / 3600);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(currentOs);

// another useful module is path module that allow us to interact with file path
