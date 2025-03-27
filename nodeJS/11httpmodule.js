const http = require("http");

const server = http.createServer((req, res) => {
  // first parameter is the incoming request and second is the response
  //   console.log(req);
  if (req.url === "/") {
    res.end("welcome to our home page ");
    return;
  }
  if (req.url === "/about") {
    res.end("welcome to about page");
    return;
  }
  res.end(`
    <h1> Oops! </h1>
    <p> We can't seem to find the page you are looking for </p>
    <a href="/" > back home</a>    
    `);
  //   res.write("welcome to home page");
  //   res.end();    agar yeh lgana bhul gya iska matlab abhi aur data aaya ga phir jo hai website start nhi hogi
});

// on what port our server going to listen
server.listen(5000);
