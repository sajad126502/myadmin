const express = require('express');
const {isAuthenticated,isAdmin} = require('../middleware/auth');
const User = require('../models/User');
const Trips = require('../models/Trips');
const Orders = require('../models/Orders');
const Review = require('../models/Review');
const uploadImage = require('../middleware/uploadImage');
const router = express.Router();
const multer  = require('multer');
const { changeSettingsController } = require('../controllers/settings');
const { addTripController } = require('../controllers/trips');
const { getAdminDashboardController } = require('../controllers/auth');
const upload = multer({ dest: '../../uploads/' })
// Define routes
router.get('/dashboard', isAuthenticated, isAdmin, getAdminDashboardController);
  router.post('/addtrip',isAuthenticated, isAdmin,upload.single("photos"),uploadImage,addTripController );
  // Route to update settings
router.post('/settings',changeSettingsController );
 
module.exports = router;