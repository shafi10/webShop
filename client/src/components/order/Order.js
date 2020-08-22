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
        <h1 className="border-bottom text-success mb-2 mt-4">Order and user Details</h1>

      <div className="row">
      <div className="col-md-8">
          <h1 className="border-bottom text-success mb-2 mt-4">Orders Details</h1>
        <table className="table">
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
      <p className="total">Total QTY: {totalQty} Quantity</p>
      <p className="total">Item Price : {itemPrice} Taka</p>
      <p className="total">Shipping Price: {shippingPrice} Taka</p>
      <p className="total border-bottom">Total Vat: {vatPrice} Taka</p>
      <h5 className="total">Total Price: {totalPrice} Taka</h5>
     </div>
         <div className="col-md-4">
               <h1 className="border-bottom text-success mb-2 mt-4">User Address</h1>
                   <ul class="list-group">
                       <li class="list-group-item">name:{user ? user.name : ''}</li>
                       <li class="list-group-item">Address:{user? user.address : ''}</li>
                       <li class="list-group-item">Phone:{user? user.phone : ''}</li>
                       <li class="list-group-item">Delivary Address:{user? user.address : ''}</li>
                   </ul>
            </div>
            </div>

            <button className="btn btn-primary mt-2" onClick ={() => saveOrder(cartItems,totalQty,totalPrice)}>Submit Order</button>
        </div>
    )
}


export default Order
