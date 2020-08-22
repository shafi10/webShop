import React, { useEffect } from 'react'
import {Link} from "react-router-dom";
import {addToCart, removeProduct} from '../../actions/cart';
import { useDispatch,useSelector } from 'react-redux'

const Cart = (props) => {
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]):1
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty))
        }
    },[])
   
    const removeFromCart = (productId) =>{
        dispatch(removeProduct(productId));
    }

    const checkoutHandler = () => {
        props.history.push('/orders');
    }
    return (
         <div className="row mt-4">
             <div className="col-md-8">
             {cartItems.length === 0 ? <div>Cart is Empty</div> : 
             cartItems.map(item =>
             <div class="card mt-2">
                 <div class="card-header">
                 <Link className="link" to={"/product/" + item.product}>Product Name: { item.name}</Link>
                    </div>
                   <div class="card-body">
                       <div className="row">
                           <div className="col-md-4">
                    <img className="cart-img" src={item.image} />
                    </div>
                    <div className="col-md-4">
                  <h5 class="card-title"> Price: {item.price} Taka</h5>
                 <p class="card-text">Quantity: {item.qty}</p>
                </div>
               
                <div className="col-md-4">
                <button className="btn btn-primary" onClick={() => removeFromCart(item.product)}>
                    Delete
                 </button>
                 </div>
                 </div>
                 </div>
              </div>)}
             </div>
             <div className="col-md-4 mt-2">
             { cartItems.length > 0 ?
             <div class="card">
              <div class="card-header">
              Amount Details
             </div>
              <div class="card-body">
                <h5 class="card-title">Total Taka: {cartItems.reduce((a,b) => a + b.price * b.qty,0)}</h5>
                <p class="card-text">Items: { cartItems.reduce((a,b) => a + +b.qty,0)}</p>
                <button className="btn btn-primary" onClick={checkoutHandler}>
                 Procced to checkout
                </button>
              </div>
           </div> :<Link  className="btn" to="/"> Do some Shopping </Link> }
             </div>
         </div>
    )
}

export default Cart
