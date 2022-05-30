import {ADD_PHONE_TO_CART, DELETE_PHONE_FROM_CART} from "./types";


const initialState = {
    cart: [ ]
};

export const cartReducer=(state=initialState,action)=>{
    switch (action.type){
        case ADD_PHONE_TO_CART:
            return {...state,cart:[...state.cart,action.phoneToCart]};

        case DELETE_PHONE_FROM_CART:
            const index=state.cart.findIndex(i=>i.cartId===action.idForDelete)
            state.cart.splice(index, 1);
            return {...state,cart:[...state.cart]};
        default:return state;
    }
}
