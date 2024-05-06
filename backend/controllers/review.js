const Review = require("../models/Review");

const reviewController=async (req, res) => {
    try {
      const { user, rating, comment } = req.body;
      const review = new Review({ user, rating, comment });
      await review.save();
      res.status(201).json({review });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create review' });
    }
  }
  module.exports={reviewController}