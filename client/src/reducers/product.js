import { GET_PRODUCT, GET_ERROR, SINGLE_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from '../actions/types';

const initialState = {
    products:[],
    product:{},
    loading:true,
    error:{}
}

export default function(state= initialState, action){
   const {type, payload} = action


   switch(type){
       case SINGLE_PRODUCT:
           return{
               ...state,
               product:payload,
               loading:false
           }
        case GET_PRODUCT:
            return{
                ...state,
                products:payload,
                loading:false
            }
        case ADD_PRODUCT:
        case UPDATE_PRODUCT:
            return {
                ...state,
                loading:false
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                loading:false
            }
       case GET_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
            }
        default:
            return state;
   }
}

