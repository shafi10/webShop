import React,{useEffect} from 'react'
import { singleOrder } from '../../actions/order'
import {useDispatch, useSelector} from 'react-redux'
import './orderDetails.css'

 const OrderDetails = (props) => {
    const { order ,load} = useSelector(state => state.order)
     const dispatch = useDispatch()
       useEffect(()=>{
          dispatch(singleOrder(props.match.params.id)); 
       },[])
    return (
        load ?  <div> loading </div> :
        <div className="container">
          <h1 className="heading">Order Details</h1>
            <div className="order-details">
             <div>
                 <h3>Cart Details</h3>
            <div className="cart-div">
                {order.cart ? order.cart.map(data =>
                   <ul>
                       <li>Product ID: {data.product}</li>
                       <li>Product Name: {data.name}</li>
                       <li>Product Price: {data.price}</li>
                       <li>Product QTY: {data.qty}</li>
                   </ul> 
                    ) : <div>loading</div>}
            </div>
            </div>
            <div className="user-div">
                <h3>User Information</h3>
                { order.user ? 
                    <ul>
                    <li>User Name: {order.user.name}</li>
                    <li>User Address: {order.user.address}</li>
                    <li>User Phone: {order.user.phone} </li>
                    <li>Submit Date: {order.user.date}</li>
                </ul>: <div>loading</div> 
                }
            </div>
            <div className="details-div">
                <h3>Order Description</h3>
                {order.status ? 
                  <ul>
                    <li>Total Price: {order.totalPrice}</li>
                    <li>Total Item: {order.totalQty}</li>
                    <li>Order Status: {order.status}</li>
                    <li>Payment: Cash</li>
                 </ul>: <div>loading</div> 
                 }
            </div>
        </div>
        </div>
    )
}

export default OrderDetails;


