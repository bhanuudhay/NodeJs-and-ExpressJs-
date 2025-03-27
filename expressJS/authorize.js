const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "John") {
    req.user = { name: "John", id: 3 };
    console.log("authorize");
    next();
  } else {
    res.status(404).send("Not Authorize");
  }
};

module.exports = authorize;
