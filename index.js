const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/add", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
     res.send("ok");
  if (isNaN(num1) || isNaN(num2)) {
    res.send("Invalid data types");
  }

  let sum = Number(num1 + num2);

  res.send("The sum of given numbers" + " " + Number(sum));
});

app.post("/sub", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.send("Invalid data types");
  }

  let sub = Number(num1 - num2);

  res.send("The difference of given numbers" + " " + Number(sub));
});

app.post("/multiply", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.send("Invalid data types");
  }

  let product = Number(num1 * num2);

  res.send("The product of given numbers" + " " + Number(product));
});

app.post("/divide", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  if (num2 === 0) {
    res.send("Cannot divide by zero");
  } else if (isNaN(num1) || isNaN(num2)) {
    res.send("Invalid data types");
  }

  let divide = Number(num1 / num2);

  res.send("The division of given numbers" + " " + Number(divide));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
