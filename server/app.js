const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
require("dotenv").config();
const morgan = require("morgan");
const userRoutes = require("./routes/userRoutes");
const connect = require("./connect");


app.use(cors());

// Connect to Local DB
connect();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.use("/", userRoutes)