require("dotenv").config({ path: __dirname + "/../../.env" });
const db = require("../db/db.js");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { Schema } = mongoose;
const router = require('../routes/index.js');
const adminRoutes = require('../routes/admin.js');
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); 
const port = process.env.PORT || 8000;
app.use(cors());
// Create a model
app.use('/api', router);
app.use('/api/admin', adminRoutes);
app.listen(port, () => {
  console.log("🟢 Server listen on port" + port);
});
