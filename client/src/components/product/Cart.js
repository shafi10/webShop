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
        <div>
            <h1 className="heading">Your Orders</h1>
        <div className="cart">
            <div className="cartList">
                    {cartItems.length === 0 ? <div>Cart is Empty</div> : 
                       cartItems.map(item => 
                        <div className="cart-display">
                            <img src={item.image}/>
                              <div className="des">
                                 <div className="dess"> <Link className="link" to={"/product/" + item.product}>Product Name: { item.name}</Link></div>
                                  <div className="dess"> Quantity: {item.qty}</div>
                                  <div className="dess"> Price: {item.price} Taka</div>
                              </div>
                            <button className="cart-btn" onClick={() => removeFromCart(item.product)}>
                                     Delete
                                 </button>
                        </div>
                        )
                    }
            </div>
            { cartItems.length > 0 ?
            <div className="cartAction">
              <h2>
                  Items: { cartItems.reduce((a,b) => a + +b.qty,0)}</h2>
               <h2> Total Taka: {cartItems.reduce((a,b) => a + b.price * b.qty,0)} </h2>
            <button className="btn" onClick={checkoutHandler}>
                Procced to checkout
           </button> 
            </div> :<Link  className="btn" to="/"> Do some Shopping </Link> }
        </div>
        </div>
    )
}

export default Cart
