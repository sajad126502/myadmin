const Orders = require("../models/Orders");


const createOrderController=async (req, res) => {
    try {
      const { user, trip,totalPricePaid } = req.body; // Assuming the payload is sent in the request body
  
      const order = new Orders({
        user: mongoose.Types.ObjectId.createFromHexString(user),
        trip:mongoose.Types.ObjectId.createFromHexString(trip),
        totalPricePaid,
        createdAt: new Date()
      });
  
      await order.save();
      res.status(201).json({order });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create order' });
    }
  }
  module.exports={createOrderController}