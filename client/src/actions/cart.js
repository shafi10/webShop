
import axios from 'axios';
import Cookie from 'js-cookie';
import { ADD_TO_CART,CART_REMOVE_ITEM, EMPTY_CART } from './types';

export const addToCart = (productId,qty) => async (dispatch,getState )=>{
   try {
       const {data} = await axios.get('/product/'+productId);
       dispatch({
         type:ADD_TO_CART,
         payload:{
             product:data._id,
             name:data.name,
             image:data.image,
             price:data.price,
             inStock:data.inStock,
             qty
         }
       })
       const {cart:{cartItems}} = getState()
        Cookie.set("cartItems", JSON.stringify(cartItems));
   } catch (error) {
       
   }
}

export const removeProduct = (productId) => (dispatch,getState )=>{
    dispatch({
        type:CART_REMOVE_ITEM,
        payload:productId
    })
    const {cart:{cartItems}} = getState()
    Cookie.set("cartItems", JSON.stringify(cartItems));
}


export const emptyCart = () => (dispatch) =>{
    dispatch({
        type:EMPTY_CART
    })
    Cookie.remove("cartItems")
}
