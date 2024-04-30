require("dotenv").config({ path: __dirname + "/../../.env" });
const db = require("../db/db.js");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { Schema } = mongoose;
const port = process.env.PORT || 8000;
app.use(cors());
// Define a schema
const userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
});

// Create a model
let User = mongoose.model("User", userSchema);
app.get("/api", async(req, res) => {
  // Example usage
  const data=await User.find({})
  res.json(data);
});
app.listen(port, () => {
  console.log("🟢 Server listen on port" + port);
});
