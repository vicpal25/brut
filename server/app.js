"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./utils/db");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.use(db);

require("./routes")(app);

app.get("/", (req, res) => {
  res.send("Hello worldd bruh\n");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
