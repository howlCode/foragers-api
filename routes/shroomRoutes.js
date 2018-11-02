require("../models/Shroom");
const shrooms = require("../test_data/shrooms_data/shrooms_dev");

module.exports = app => {
  app.get("/api/shrooms", (req, res) => {
    res.send(shrooms);
  });
};
