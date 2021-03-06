import { REGISTER_SUCCESS,LOGIN_SUCCESS,AUTH_FAIL,USER_LODED,LOGOUT } from '../actions/types'

const initialState ={
    token:localStorage.getItem('token'),
    isAuthenticated: null,
    loading : true,
    user:null
}


export default function(state= initialState, action ){
    const { type , payload} = action;

    switch(type){
        case USER_LODED: 
           return {
               ...state ,
               isAuthenticated: true,
               loading:false,
               user:payload
           }
       case REGISTER_SUCCESS:
           return {
               ...state,
               loading:false
           }
        case LOGIN_SUCCESS:
                localStorage.setItem('token', payload.token)
                return {
                    ...state,
                    ...payload,
                    isAuthenticated:true,
                    loading:false
                }
        case AUTH_FAIL:
        case LOGOUT:
                localStorage.removeItem('token')
                return {
                        ...state,
                        token:null,
                        isAuthenticated:false,
                        loading:false
                    }
         default:
            return state
    }
} 