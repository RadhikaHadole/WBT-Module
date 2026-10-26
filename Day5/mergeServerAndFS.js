const FS = require("fs");
const HTTP = require("http");
const SERVER = HTTP.createServer((req, res) => {
  let fileName = "";
  if (req.url == "/") {
    fileName = "Home.html";
  } else if (req.url == "/about-us") {
    fileName = "about.html";
  } else if (req.url == "/example") {
    fileName = "example.html";
  }
  // else {
  //    fileName = "pagenotfound.html";
  //    }

  FS.readFile(fileName, "utf-8", function (err, data) {
    if (!err) {
      res.end(data);
    } else {
      console.log(err);
    }
  });
});
SERVER.listen(4001, function () {
  console.log("Server Started");
});
