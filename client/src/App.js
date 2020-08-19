import React,{useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Register from './components/auth/Register';
import Products from './components/product/Products';
import ProductDetails from './components/product/ProductDetails';
import Login from './components/auth/Login'
import Cart from './components/product/Cart';
import PostProduct from './components/product/PostProduct';
import Admin from './components/dashboard/Admin'
import UpdateProduct from './components/product/UpdateProduct'
import Order from './components/order/Order';
import OrderDetails from './components/order/OrderDetails'

import { Provider } from 'react-redux';
import store from './store'
import setAuthToken from './utils/setAuthToken';
import {loadUser} from './actions/auth'
import UserDash from './components/dashboard/UserDash';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {

  useEffect(()=>{
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store = {store}>
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path='/' component={Products} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/product/:id' component={ProductDetails} />
      <Route exact path='/cart/:id?' component={Cart} />
      <Route exact path='/addProduct' component={PostProduct} />
      <Route exact path='/admin' component={Admin} />
      <Route exact path='/upProduct/:id' component={UpdateProduct} />
      <Route exact path='/orders' component={Order} />
      <Route exact path='/orderDetails/:id' component={OrderDetails} />
      <Route exact path='/dashboard' component={UserDash} />
      </Switch>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
