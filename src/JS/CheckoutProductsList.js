import React from "react";
import "../CSS/OrderCheckout.css"
import {CartCard} from "./CartCard";
import {useSelector} from "react-redux";
import {MyComponent} from "../Components/MyCommponent";


export const CheckoutProductsList=(props)=>{

    const CartItems = useSelector(state=>{
        const {cartReducer}=state;
        return cartReducer.cart
    })

    let total=0;
    CartItems.map(product=>{
        total+=product.price
    });



    return(
        <>
            <div className="checkout__container" >
                <div className="checkout__inner">
                    <div className="checkout__form">
                        <h2 className="checkout__main-title">List Of Products:{CartItems.length}</h2>
                        <div className="checkout__list">
                            <MyComponent.isCartLengthExist CartItems={CartItems}>
                            {CartItems.map((CartItem) =>
                                    <>
                                        <div  key={CartItem.id}>
                                            <CartCard CartItem={CartItem}/>
                                        </div>

                                    </>)}
                            </MyComponent.isCartLengthExist>
                        </div>
                        <div className="total__section">
                            <h2 className="checkout__total">Total:</h2>
                            <h3 className="checkout__total">$ {total}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}