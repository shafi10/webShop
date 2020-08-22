import React,{useEffect} from 'react'
import { singleOrder } from '../../actions/order'
import {useDispatch, useSelector} from 'react-redux'

 const OrderDetails = (props) => {
    const { order ,load} = useSelector(state => state.order)
     const dispatch = useDispatch()
       useEffect(()=>{
          dispatch(singleOrder(props.match.params.id)); 
       },[])
    return (
        load ?  <div> loading </div> :
        <div className="">
          <h1 className="heading">Order Details</h1>
            <div className="order-details">
             <div>
                 <h3>Cart Details</h3>
            <div className="row ">
                {order.cart ? order.cart.map(data =>
                <div className="col-md-4 mt-2">
                   <ul class="list-group">
                       <li  class="list-group-item">Product ID: {data.product}</li>
                       <li  class="list-group-item">Product Name: {data.name}</li>
                       <li  class="list-group-item">Product Price: {data.price}</li>
                       <li  class="list-group-item">Product QTY: {data.qty}</li>
                   </ul> 
                   </div>
                    ) : <div>loading</div>}
            </div>
            </div>
            <div className="user-div">
                <h3>User Information</h3>
                { order.user ? 
                    <ul class="list-group">
                    <li class="list-group-item">User Name: {order.user.name}</li>
                    <li class="list-group-item">User Address: {order.user.address}</li>
                    <li class="list-group-item">User Phone: {order.user.phone} </li>
                    <li class="list-group-item">Submit Date: {order.user.date}</li>
                </ul>: <div>loading</div> 
                }
            </div>
            <div className="details-div">
                <h3>Order Description</h3>
                {order.status ? 
                  <ul class="list-group">
                    <li class="list-group-item">Total Price: {order.totalPrice}</li>
                    <li class="list-group-item">Total Item: {order.totalQty}</li>
                    <li class="list-group-item">Order Status: {order.status}</li>
                    <li class="list-group-item">Payment: Cash</li>
                 </ul>: <div>loading</div> 
                 }
            </div>
        </div>
        </div>
    )
}

export default OrderDetails;


