const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Olá Troquei de brach");
});


app.listen(3067, () => {
  console.log("Servidor on");
});