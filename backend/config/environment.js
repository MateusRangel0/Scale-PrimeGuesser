require("dotenv").config();

const environment = {
  BASE_URL: process.env.BASE_URL,
  PORT: process.env.PORT || 3333,
};

module.exports = environment;
