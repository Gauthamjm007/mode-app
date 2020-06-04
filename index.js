const express = require("express");
const cors = require("cors");
const setupDB = require("./config/database");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const router = require("./config/router");
var corsOptions = {
  exposedHeaders: ["content-Type", "xauth"],
};

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);

//db configuration
setupDB();

app.listen(PORT, () => {
  console.log(`listening at the port ${PORT} .........`);
});
