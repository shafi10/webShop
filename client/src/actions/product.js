import axios from'axios';
import { GET_PRODUCT, GET_ERROR, SINGLE_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from './types';

export const get_product = () => async dispatch =>{
    try {
        const res = await axios.get('/products');
        dispatch({
            type:GET_PRODUCT,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:GET_ERROR,
            payload: {msg: error.response.statusText, status:error.response.status}
        })
    }
}

export const single_product = (productId) => async dispatch =>{
    try {
        const res = await axios.get('/product/'+productId);
        dispatch({
            type:SINGLE_PRODUCT,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:GET_ERROR,
            payload: {msg: error.response.statusText, status:error.response.status}
        })
    }
}


export const addProduct = ({name, category,image,price,brand,rating, numReviews,inStock}) => async dispatch =>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({name, category,image,price,brand,rating, numReviews,inStock}) 

    try {
        const {data} = await axios.post('/postProduct', body, config);
        dispatch({
            type:ADD_PRODUCT,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:GET_ERROR
        })
    }
}


export const removeProduct = (productId) => async dispatch =>{
   try {
    const res = await axios.delete('/delProduct/'+productId);
    dispatch({
        type:DELETE_PRODUCT,
        payload:res.data
    })
   } catch (error) {
    dispatch({
        type:GET_ERROR
    })
   }

}

export const updateProduct = (productId,formData) => async dispatch =>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    try {
        const {data} = await axios.put('/upProduct/'+productId, formData, config);
        dispatch({
            type:UPDATE_PRODUCT,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:GET_ERROR
        })
    }
}