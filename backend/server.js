const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose  = require("mongoose");

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.port, () => {
    console.log("Server is Listening!");
});

const contactRoute = require("./routes/contactRoute.js");

app.use("/api/",contactRoute);