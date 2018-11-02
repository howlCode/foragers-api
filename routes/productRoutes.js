require("../models/Product");
const products = require("../test_data/products_data/products");

module.exports = app => {
  app.get("/api/products", (req, res) => {
    res.send(products);
  });
};
