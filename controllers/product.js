const data = require('../models/data')

const Product = require('../models/Product');

exports.getProducts = async (req,res)=>{
try {
    const products = await Product.find()

    res.status(200).json(products);
} catch (error) {
    console.log(error);
}
}

exports.getSingleProduct = async (req,res) =>{

    try {
        const id = req.params.id;

    const product = await Product.findById(id);
   // const result = data.products.find(p => p._id == id);
    res.status(200).json(product);
    } catch (error) {
        console.log(error);
    }
}


exports.postProduct = async (req,res) =>{
    const {name, category, image,price,brand,rating, numReviews,inStock } = req.body;

    try {
        const product = new Product({
            name, category, image,price,brand,rating, numReviews,inStock
        })

        await product.save()
        res.json({msg:"Product insert successful", data:product})
    } catch (error) {
        console.log(error);
    }
}

exports.updateProduct = async (req,res) =>{
    try {
        let upProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidators:true
        })
        if(!upProduct){
            return res.status(404).json({msg:"product not found"})
        }
        res.json({msg:"product update successful", data: upProduct})
    } catch (error) {
        console.log(error);
    }
}

exports.deleteProduct =  async (req,res) =>{
    try {
        const product = await Product.findById(req.params.id)
        if(!product){
            return res.status(404).json({msg:'product not found'})
        }

        await product.remove();
        res.json({'msg': 'Product remove successful'});
    } catch (error) {
        if(error.kind==='ObjectId'){
            return res.status(404).json({msg:'not found'})
        }
        console.log(error)
    }
}