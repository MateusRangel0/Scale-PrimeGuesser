require("dotenv").config();
const cors = require("cors");
const express = require("express");
const routes = require("./routes");
const environment = require("./config/environment");
const { PORT } = environment;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
