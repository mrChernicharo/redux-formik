const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello world</h1>");
});

app.get("/professionals", (req, res) => {
  res.send([{ name: "Zé" }, { name: "Tim" }, { name: "Tom" }]);
});

app.listen(PORT, () => {
  console.log(`server listening at PORT`, PORT);
});
