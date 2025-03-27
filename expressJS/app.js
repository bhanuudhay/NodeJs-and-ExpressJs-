const express = require("express");
const app = express();

app.use("/api/people");
//static assets
app.use(express.static("./methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome ${name}`);
  } else {
    res.status(401).send("Enter a valid name");
  }
  console.log(req.body);
  res.send("post");
});

app.listen(5000, () => {
  console.log("server is listening at 5000");
});
