const {} = require("../models");

const home = (req, res) => {
  res.send("Welcome To the Home Page");
};

const pageNotFound = (req, res) => {
  res.status(404).send("<h1>Page Not Found!</h1>");
};

module.exports = {
  home,
  pageNotFound,
};

