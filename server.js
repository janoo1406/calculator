const express = require("express");
const app = express();
const { resolve } = require("path");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/logic", async (req, res) => {
  res.json({});
});

app.get("/hello_world", async (req, res) => {
  res.send("Hello, World!");
});

app.listen(process.env.PORT || 5000, () => console.log('Node server listening on port 5000!'));