const Orders = require("../models/Orders");
const Review = require("../models/Review");
const Trips = require("../models/Trips");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwt");
let settings = {};
try {
  settings = require('../settings.json');
} catch (error) {
  console.error('Error loading settings:', error);
}
const signUpController=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Missing required fields" });
  }
    // Check if user with the same email already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create a new user instance
    user = new User({ name , email, password });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save the user to the database
    await user.save();

    res.status(201).json({ msg: "User created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
}
const loginController=async (req, res) => {
    const { email, password } = req.body;
    try {
      // Check if user with the provided email exists
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
  
      // Check if the password is correct
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
  
      // Return a token or other authentication mechanism
      // For simplicity, let's just send a success message
      const token=generateToken(user)
      res.json({ token });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: "Server error" });
    }
  }
  const getAccInfoController=async(req,res)=>{
    const user =await User.findById(req.userId).select(["-password","-tripOrders"])
    res.json({user})
    }
    const getAdminDashboardController=async (req, res) => {
        try {// Assuming the user ID is stored in req.user.id
          // Query all users excluding the password field and the logged-in user
          const users = await User.find({ _id: { $ne: req.userId } }).select('-password');
          // Query all trips
          const trips = await Trips.find();
          const orders = await Orders.find().populate(['user', 'trip']);
          const reviews = await Review.find().populate(['user']);
    
    
          // Send the data as JSON
          res.status(200).json({ users, trips ,orders,reviews,settings});
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server error' });
        }
      }
module.exports={signUpController,loginController,getAccInfoController,getAdminDashboardController}