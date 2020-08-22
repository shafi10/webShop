import React,{useEffect} from 'react'
import {Link} from "react-router-dom";
import { get_product } from '../../actions/product'
import { useDispatch,useSelector } from 'react-redux';
import Spinner from '../Spinner';


const Products = () => {

const productState = useSelector(state => state.product)
 const {products,error,loading } = productState
const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(get_product())
  }, []);

    return (
     loading ? <Spinner /> :
     <div className="">
       <div className="border-bottom text-success mb-2 mt-4"><h1>Product List</h1></div>
       <div className="row mt-3">
       {products.map(product=> 
        <div className="col-md-4">
        <div class="card mt-3">
           <img src={product.image} class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Product Name: {product.name}</h5>
            <h5 class="card-title">Product Price: {product.price} Taka</h5>
              <p class="card-text">Product Category: {product.category}</p>
             <Link className="btn btn-primary" to={'product/'+ product._id}>Details</Link>
            </div>
            </div>
        </div>
        )}
        </div>
     </div>
    )
}


export default Products;