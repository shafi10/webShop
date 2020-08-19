import axios from'axios';
import {ADD_ORDER, ERROR_ORDER, GET_ORDER, USER_ORDER,SINGLE_ORDER} from './types'

export const postOrder = (cartItems,totalQty,totalPrice) => async dispatch =>{
    //console.log(cart)
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    try {
        const payload ={
            cart:cartItems,
            totalQty:totalQty,
            totalPrice:totalPrice
        }
        const {data} = await axios.post('/order',payload,config)
         dispatch({
             type:ADD_ORDER,
             payload:data
         })

    } catch (error) {
        dispatch({
            type:ERROR_ORDER,
            payload:error
        })
    }
}


export const getOrder = () => async dispatch =>{
    try {
        const {data} = await axios.get('/getOrder');

        dispatch({
            type:GET_ORDER,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:ERROR_ORDER,
            payload:error
        })
    }
} 


export const singleOrder = (id) => async dispatch =>{
    try {
        const {data } = await axios.get('/singleOrder/'+id)

        dispatch({
            type:SINGLE_ORDER,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:ERROR_ORDER,
            payload:error
        })
    }
}

export const usersOrder = () => async dispatch =>{
    try {
        const {data} = await axios.get('/userOrder')
        dispatch({
            type:USER_ORDER,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:ERROR_ORDER,
            payload:error
        })
    }
} 
