require("../models/Course");
const courses = require("../test_data/courses_data/courses");

module.exports = app => {
  app.get("/api/courses", (req, res) => {
    res.send(courses);
  });
};
