require("dotenv").config();

const environment = {
  BASE_URL: process.env.BASE_URL,
  PORT: process.env.PORT || 8080,
};

module.exports = environment;
