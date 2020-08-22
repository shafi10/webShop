import React from 'react';
import {Link} from "react-router-dom";
import { logout } from '../actions/auth'
import { useSelector,useDispatch } from 'react-redux';
import {emptyCart} from '../actions/cart'


const Navbar = (props) => {
    const {user, isAuthenticated } = useSelector(state => state.auth);
    const {cartItems} = useSelector(state => state.cart)
     const dispatch = useDispatch();

     const submitLogout = () => {
       dispatch(logout())
        if(cartItems.length>0){
          dispatch(emptyCart())
        }
  }

    return (
        <div className="">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
         <Link class="navbar-brand" to="/">Home</Link>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
           </button>
         <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav ml-auto">
         { !isAuthenticated ? <>
           <li class="nav-item active">
          <Link class="nav-link" to="/login">Login</Link>
          </li>
        <li class="nav-item">
          <Link class="nav-link" to="/register">Register</Link>
        </li> </> : <>
        {user && user.isAdmin ? 
        <li class="nav-item">
        <Link className="nav-link" to="/admin">Dashbord</Link>
        </li> :
        <li className="nav-item">
        <Link className="nav-link" to="/dashboard">{user ? user.name : 'loading'}</Link>
        </li> }
        <li className="nav-item">
        <Link onClick= {() => submitLogout()} className="nav-link" to="/">Logout</Link>
        </li> </>
         }
        <li class="nav-item">
        <Link className="nav-link" to="/cart"><span className="fas fa-cart-plus">{cartItems.length}</span></Link>
        </li>
       </ul>
       </div>
    </nav>
    </div>
    )
}

export default Navbar;
