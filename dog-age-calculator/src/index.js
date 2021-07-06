const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, response) {
  console.log(__dirname);
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, response) {
  var age = Number(request.body.n1) / 15;
  response.send("Your age in dog years is:" + age + "dog years");
});
app.listen(port);
