"use strict";

const express = require("express");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();

require("./routes")(app);

app.get("/", (req, res) => {
  res.send("Hello worldd bruh\n");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
