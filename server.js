const quotes = require("./quotes");


// console.log(quotes[index]);

"use strict";
const http = require("http");
const port = 8888;

http.createServer((req, res) => {
  const index = Math.floor(Math.random() * quotes.length); // random number as the array index
  res.writeHead(200, {"Content-type": "text/plain"});
  res.write(quotes[index]);
  res.end();
}).listen(port);

console.log("http://localhost:" + port);