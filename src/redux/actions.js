import {
    ADD_PHONE, USER_SIGN_IN,
    ADD_PHONE_TO_CART, DELETE_PHONE_FROM_CART,
    QUANTITY_UPDATE, USER_SIGN_OUT,
    GALLERY_DISLIKE_LIKE,GALLERY_COMMENT
} from "./types";

export const userSignIn=(user)=>{
    return {
        type:USER_SIGN_IN,
        user
    }
}
export const addPhone=(phone)=>{
    return {
        type:ADD_PHONE,
        phone
    }
}
export const addPhoneToCart=(phoneToCart,id)=>{
    return {
        type:ADD_PHONE_TO_CART,
        phoneToCart,
        id
    }
}
export const deletePhoneFromCart=(idForDelete)=>{
    return {
        type:DELETE_PHONE_FROM_CART,
        idForDelete
    }
}
export const quantityUpdate=(id,quantity)=>{
    return {
        type:QUANTITY_UPDATE,
        id,
        quantity
    }
}
export const userSignOut=()=>{
    return {
        type:USER_SIGN_OUT,

    }
}
export const galleryDislikeLike=(id,flag)=>{
    return {
        type:GALLERY_DISLIKE_LIKE,
        id,
        flag
    }
}
export const galleryComment=(id,comment)=>{
    return {
        type:GALLERY_COMMENT,
        id,
        comment
    }
}
