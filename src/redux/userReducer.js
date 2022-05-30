import {USER_SIGN_IN,USER_SIGN_OUT} from "./types";

const initialState ={
    user:{}
};

export const userReducer=(state=initialState,action)=>{
    switch (action.type){
        case USER_SIGN_IN:
            return {...state,user: {...action.user}};
        case USER_SIGN_OUT:
            return {...state,user: {}};

        default:return state
    }
}
