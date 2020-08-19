import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { postOrder } from '../../actions/order'
import {loadUser} from '../../actions/auth'
import {emptyCart} from '../../actions/cart'

const Order = (props) => {
  
    const  {cartItems} = useSelector(state => state.cart)
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const saveOrder = (cartItems,totalQty,totalPrice) =>{
        dispatch(postOrder(cartItems,totalQty,totalPrice))
         dispatch(emptyCart())
        props.history.push('/dashboard')
    }

    useEffect(()=>{
       dispatch(loadUser())
    },[3])


    const totalQty = cartItems.reduce((a,b) => a + +b.qty,0)
    const itemPrice = cartItems.reduce((a,b) => a + b.price * b.qty,0)
    const shippingPrice = itemPrice > 200 ? 0 : 10;
    const vatPrice = 0.15 * itemPrice
    const totalPrice = itemPrice + shippingPrice + vatPrice;


    return (
        <div>
        <h1 className="heading">Order and user Details</h1>

      <div className="order">
      <div className="cart-data">
          <h1>Orders Details</h1>
        <table className="products">
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
     </tr>
      {cartItems.map(data=> 
    <tr>
    <td>{data.name}</td>
    <td>{data.price}</td>
    <td>{data.qty}</td>
       </tr>
          )}
      </table>
      <h3 className="total">Total QTY: {totalQty} Quantity</h3>
      <h3 className="total">Item Price : {itemPrice} Taka</h3>
      <h3 className="total">Shapping Price: {shippingPrice} Taka</h3>
      <h3 className="total">Total Vat: {vatPrice} Taka</h3>
      <h3 className="total">Total Price: {totalPrice} Taka</h3>
     </div>
         <div className="user-info">
               <h1>User Address</h1>
                   <ul>
                       <li>name:{user ? user.name : ''}</li>
                       <li>Address:{user? user.address : ''}</li>
                       <li>Phone:{user? user.phone : ''}</li>
                       <li>Delivary Address:{user? user.address : ''}</li>
                   </ul>
            </div>
            </div>

            <button className="btn position" onClick ={() => saveOrder(cartItems,totalQty,totalPrice)}>Submit Order</button>
        </div>
    )
}


export default Order
