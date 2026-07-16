const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const method = req.method;
  const path = req.url;

  const log = `\n${new Date().toLocaleString()} - ${method}: ${path}`;
  fs.appendFileSync("log.txt", log, "utf-8");

  switch (method) {
    case "GET":
      {
        switch (path) {
          case "/":
            return res.writeHead(200).end("Hello From The Server 👋🏻");
          case "/contact-us":
            return res.writeHead(200).end("Contact us @sameerahmadk789@gmail.com");
          case "/tweet":
            return res.writeHead(200).end("Tweet-1\nTweet-2\nTweet-3");
        }
      }
      break;
    case "POST": {
      switch (path) {
        case "/tweet":
          return res.writeHead(201).end("Your Tweet was created!");
      }
    }
  }
  return res.writeHead(404).end("You're Lost Bud 🥀🥀");
});

server.listen(8000, () => console.log(`HTTP server is running on PORT: 8000`));
