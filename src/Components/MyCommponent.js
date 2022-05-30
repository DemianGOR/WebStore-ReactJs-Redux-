import React from "react";


const emptyCart =<div className="cart__empty" >Cart is empty</div>

export const MyComponent={
    isUserAuth: function isUserAuth({id ,children,different}){
        return (<> {id !== undefined ? children : different  ? different : <></>} </>);
    },
    isUserAdmin: function isUserAdmin({userId ,children,different}){
        return (<> {userId === "102414693701386840515" ? children : different  ? different : <></>} </>);
    },
    isCartLengthExist: function isCartLengthExist({CartItems ,children}){
        return (<> {CartItems.length !== 0 ? children : emptyCart} </>);
    },
}