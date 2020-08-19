const {model, Schema}  = require('mongoose');


const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    numReviews:{
        type:Number,
        required:true
    },
    inStock:{
        type:Number,
        required:true
    }
})

const Product = model('Product' , productSchema);

module.exports = Product;







