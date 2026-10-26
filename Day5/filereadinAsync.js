const FS = require("fs");
//console.log(FS)

console.log("File Reading Started");
FS.readFile("example.html", "utf-8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log("File Reading End");
