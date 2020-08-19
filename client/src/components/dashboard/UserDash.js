import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {usersOrder} from '../../actions/order'

const UserDash = () => {
    const {user, isAuthenticated } = useSelector(state => state.auth);
       const dispatch = useDispatch()
      const {userOrder,load} = useSelector(state => state.order);
       useEffect(()=>{
           dispatch(usersOrder())
       },[])
    return (
        load ? <div>loading</div> :
        <div className="container">
            <h1 className="heading">Welcome { user ? user.name : 'loading'}</h1>
            <h3 className="heading">Your Previous Orders</h3>
               <div className="userOrders">
                   {userOrder.map(data=>
                    <ul>
                      <li>Order ID: {data._id}</li>
                      <li>Total Price: {data.totalPrice}</li>
                      <li>Status: {data.status}</li>
                    </ul>
                    )}
               </div>
        </div>
    )
}


export default UserDash;
