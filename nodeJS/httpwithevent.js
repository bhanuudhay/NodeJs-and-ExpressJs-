const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Welcome to home page");
//   } else if (req.url === "/about") {
//     res.end("Welcome to about page");
//   } else {
//     res.end(`
//       <h1>OOPS !</h1>
//       <a href="/">Home page</a>
//       `);
//   }
// });

const server = http.createServer();
server.on("request", (req, res) => {
  res.end("response");
});
server.listen(5000, () => {
  console.log("server listening on port 5000");
});
