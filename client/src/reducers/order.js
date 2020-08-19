import {ADD_ORDER,ERROR_ORDER, GET_ORDER, USER_ORDER,SINGLE_ORDER} from '../actions/types'


const initialState = {
    orders:[],
    userOrder:[],
    order:{},
    load:true,
    error:{}
}



export default function(state= initialState, action ){
    const { type , payload} = action;
     switch(type){
         case SINGLE_ORDER:
         case ADD_ORDER:
             return{
                 ...state,
                 order:payload,
                 load:false
             }
        case GET_ORDER:
                return{
                   ...state,
                   orders:payload,
                   load:false
                }
        case USER_ORDER:
            return {
                ...state,
                userOrder:payload,
                load:false
            }
        case ERROR_ORDER:
            return{
                ...state,
                error:payload,
                load:false
            }
         default:
             return state
        }
}