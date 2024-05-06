const Trips = require("../models/Trips");

const tripsContoller=async (req, res) => {
    try {
      const trips = await Trips.find().sort("-1");
      res.status(201).json({trips});
    } catch (error) {
      res.status(500).json({ message: '' });
    }
  }
const addTripController=async (req, res) => {
    try {
      const {
        title,
        description,
        destination,
        startDate,
        endDate,
        price,
        ratings
      } = req.body;
  
      // Create a new trip instance
      const newTrip = new Trips({
        title,
        description,
        destination,
        startDate,
        endDate,
        photos:req.file_urls,
        price,
        ratings
      });
  
      // Save the new trip to the database
      const savedTrip = await newTrip.save();
      res.status(201).json({trip:savedTrip});
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  }
module.exports={tripsContoller,addTripController}