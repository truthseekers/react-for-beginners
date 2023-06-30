const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const products = require("./products.json");
const bodyParser = require("body-parser");
const fs = require("fs");

const corsOptions = {
  origin: ["http://localhost:3000"], // list of URLS allowed to communicate with the server
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/products", (req, res, next) => {
  return res.send(products);
});

app.get("/product/:id", (req, res, next) => {
  console.log("req.body in /product: ", req.body);
  console.log("req.params: ", req.params);

  const result = products.find((product) => req.params.id == product.id);

  res.send(result);
});

app.post("/newProduct", (req, res, next) => {
  console.log("req.body from newProduct: ", req.body);

  products.push({
    id: products.length + 1,
    title: req.body.title || "dummy title",
    color: req.body.color || "blue",
    price: req.body.price || 50,
    category: req.body.category || "uncategorized",
  });

  console.log(products);

  fs.writeFile("products.json", JSON.stringify(products), (err) => {
    if (err) throw err;
    console.log("Done writing the products 'database'");
  });

  return res.json({
    id: products.length,
    title: req.body.title,
  });
  // res.redirect("/productNames");
  // res.send("You added the product! Check the existing products page.");
});

// These are not covered in the tutorials yet. They are for other related issues I've encountered since doing the original tutorial series.

app.get("/", (req, res) => {
  res.json("Hello World Yo!");
});

app.get("/fetchjsonstring", (req, res) => {
  return res.json("Hello World yo!... ?");
});

app.get("/fetchjsonstringawait", (req, res, next) => {
  return res.json("dawg Hello World yo json bro await on fe!");
});

app.get("/fetchjsonarray", (req, res) => {
  return res.json(products);
});

app.get("/axiosjsonstring", (req, res, next) => {
  return res.json("axios json string returned res.json");
});

app.get("/axiosjsonarray", (req, res, next) => {
  return res.json(products);
});

app.get("/axiossendarray", (req, res, next) => {
  return res.send(products);
});

app.get("/axiossendstring", (req, res, next) => {
  return res.send("Hello World yo!");
});

app.get("/fetchsendobj", (req, res, next) => {
  // return res.send("fetchsendstring!");
  return res.send({ hello: "world" });
});

app.get("/fetchsendarray", (req, res, next) => {
  // return res.send("fetchsendstring!");
  return res.send(products);
});

app.get("/fetchsendstring", (req, res, next) => {
  // return res.send("fetchsendstring!");
  return res.send("Dont know how to send a string via res.send");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
