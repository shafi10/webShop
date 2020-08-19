import {ADD_TO_CART,CART_REMOVE_ITEM, EMPTY_CART} from '../actions/types'

const initialState = {
    cartItems:[],
    loading:true,
    error:{}
}


export default function(state=initialState,action){
   const { type, payload} = action;

   switch(type){
      case ADD_TO_CART:
          const item = payload;
          const product = state.cartItems.find(x => x.product === item.product);
          if(product){
           return { ...state,cartItems:state.cartItems.map(x => x.product === product.product ? item : x)};
          }else{
              return {
                cartItems:[...state.cartItems, item]
              }
          }
        case CART_REMOVE_ITEM:
            return {
                cartItems: state.cartItems.filter(data => data.product !== payload)
            }
        case EMPTY_CART:
            return {
                cartItems:[]
            }
         default:
            return state
   }
}



