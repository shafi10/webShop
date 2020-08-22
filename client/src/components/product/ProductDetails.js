import React,{useEffect,useState} from 'react'
import {single_product} from '../../actions/product'
import { useDispatch,useSelector } from 'react-redux';
import {Link} from 'react-router-dom'



const ProductDetails = (props) => {

    const [ qty ,setQty] = useState(1)
    const singleProduct = useSelector(state => state.product)
    const {product,error,loading } = singleProduct
   const dispatch = useDispatch();
     useEffect(()=>{
       dispatch(single_product(props.match.params.id))
     }, []);

   const sendAddToCart = () =>{
       props.history.push("/cart/"+ props.match.params.id + "?qty=" + qty);
   }

     const { isAuthenticated } = useSelector(state => state.auth);
    return (

      <div className="container my-4">
        <div className="border-bottom text-success mb-2"><h1>Product Details</h1></div>
        <div className="row">
          <div className="col-sm-12 my-auto">
          <div class="card details" >
             <img src={product.image} class="card-img-top" alt="..." />
             <div class="card-body">
             <ul class="list-group list-group-flush">
              <li class="list-group-item">Product Name:  {product.name}</li>
             <li class="list-group-item">Brand: {product.brand}</li>
             <li class="list-group-item">Price: {product.price} Taka</li>
             <li class="list-group-item">Rating: {product.rating}</li>
             <li class="list-group-item"> QTY: <select className="qty" value={qty} onChange= { (e) => setQty(e.target.value)}>
              {[...Array(product.inStock).keys()].map(x => 
                <option key={x+1} value={x+1}>{x+1}</option>)}
              </select></li>             
            </ul>
            { isAuthenticated ? <div>
            {product.inStock > 0 ? <button className="btn btn-primary" onClick={sendAddToCart}>
              Add To Cart
            </button>: <div>Out Of Stock</div>} </div>: <div>Login to add item in cart <Link className="btn btn-primary" to='/login'>Login</Link></div>}
          </div>
          </div>
     </div>
     </div>
     </div>

    )
}

export default ProductDetails
