const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");
//req => middleware => res
// we just pass the middleware express will do it on its own
// const logger = (req, res, next) => {
//   // why we need next
//   // you must pass it to next middleware unless you sending any response
//   const method = req.method;
//   const url = req.url;
//   const time = new Date().getFullYear();
//   console.log(method, url, time);
//   next(); // pass it to next
// };

// what if we have 50 more routes i don't want to  add it to 50 more routes

// app.use(logger);
// to execute multiple middleware
app.use(morgan("tiny")); //  execute in the order in this logger will execute first
// once you apply this '/'before it will  apply to rest of the routes
// universally used over all the routes
//## order matter here  in interview use common sense not brain

app.get("/", (req, res) => {
  //   const method = req.method;
  //   const url = req.url;
  //   const time = new Date().getFullYear();
  //   console.log(method, url, time); //  is we have 100  calls then we have to copy paste this 100 times ans is no
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/products", (req, res) => {
  res.send("Products Page");
});
app.get("/items", (req, res) => {
  res.send("Items Page");
});

app.listen(5000, () => {
  console.log("server is listening at 5000");
});
