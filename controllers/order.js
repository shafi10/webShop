const Order = require('../models/Order')

exports.postOrder = async (req,res) =>{
   try {
       const {cart,totalQty,totalPrice} = req.body
       const order = new Order({
           user:req.user.id,
           cart:cart,
           totalQty:totalQty,
           totalPrice:totalPrice
       })

       await order.save()
       res.status(200).json(order);
   } catch (error) {
       
   }
}

exports.getOrder = async (req,res) =>{
  try {
          const order = await Order.find();
          res.status(200).json(order)
  } catch (error) {
      console.log(error);
  }
}

exports.getUserOrder = async (req,res) =>{
    try {
            const order = await Order.find({user:req.user.id});
            res.status(200).json(order)
    } catch (error) {
        console.log(error);
    }
  }

exports.getSingleOrder = async (req,res) =>{
    try {
        const data = await Order.findById(req.params.id).populate('user');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}