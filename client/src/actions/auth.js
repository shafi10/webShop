

import axios from 'axios'

import { REGISTER_SUCCESS, REGISTER_FAIL,LOGIN_SUCCESS, AUTH_FAIL,USER_LODED, LOGOUT} from './types'
import setAuthToken from '../utils/setAuthToken'

export const loadUser = () => async dispatch =>{
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
   
    try {
        const res = await axios.get('/api/user');
   
        dispatch({
            type:USER_LODED,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:AUTH_FAIL
        })
    }
   }


export const registration = ({name, email, password, address,phone}) => async dispatch =>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
   
    const body = JSON.stringify({name , email, password, address,phone})
    try {
        const res = await axios.post('/api/register', body,config)
   
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:AUTH_FAIL
        })
    }
}

export const login = (email, password)=> async dispatch=>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
   
    const body = JSON.stringify({ email, password})
    try {
        const res = await axios.post('/api/login', body,config)
   
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })

        dispatch(loadUser())
    } catch (error) {
       dispatch({
           type:AUTH_FAIL
       })
    }
   
   }

   export const logout = ()=> dispatch =>{
        dispatch({type:LOGOUT})    
   }