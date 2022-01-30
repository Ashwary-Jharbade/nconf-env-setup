const express = require("express");
const http = require("http");
const config = require("./lib/configuration/index");
const app = express();
const PORT = config.get("express:port");
app.get("/hitme", function (req, res) {
  res.json(200, "OK");
});
http.createServer(app).listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
module.exports = app;
