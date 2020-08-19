const {Schema, model} = require('mongoose')

const orderSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    cart:[{
        product:{
            type:Schema.Types.ObjectId,
            ref:'Product'
        },
        name:{
            type:String
        },
        image:{
            type:String
        },
        price:{
          type:Number
        },
        inStock:{
            type:Number
        },
        qty:{
            type:Number
        }
    }],
    totalPrice:{
      type:Number,
      default:0
    },
    totalQty:{
        type:Number,
        default:0
    },
    status:{
        type:String,
        default:'order_placed'
    }
})

const Order = model('Order', orderSchema)

module.exports = Order;