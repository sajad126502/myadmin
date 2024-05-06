const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middleware/auth");
const { signUpController, loginController, getAccInfoController } = require("../controllers/auth");
const { reviewController } = require("../controllers/review");
const { createOrderController } = require("../controllers/orders");
const { tripsContoller } = require("../controllers/trips");
const {settingsController} = require("../controllers/settings");
// Define routes
router.get("/", (req, res) => {
  res.send("api developer sajad bashir");
});
router.post("/signup", signUpController);
router.post("/login",loginController );
router.get("/getaccinfo",isAuthenticated,getAccInfoController)
router.post('/order', isAuthenticated,createOrderController );
router.post('/review', isAuthenticated, reviewController);
router.get('/trips', tripsContoller);
router.get('/settings', settingsController);




module.exports = router;
