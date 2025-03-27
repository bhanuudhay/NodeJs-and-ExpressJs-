const logger = (req, res, next) => {
  // why we need next
  // you must pass it to next middleware unless you sending any response
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next(); // pass it to next
};

module.exports = logger;
