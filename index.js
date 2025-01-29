const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hali");
});

app.get("/haligali", (req, res) => {
  res.send("haligali");
});

app.listen(5000, () => {
  console.log("Server is running on 5000");
});
//mac git test
