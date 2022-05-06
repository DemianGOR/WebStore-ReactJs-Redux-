import React, {useEffect} from "react";
import "../CSS/OrderCheckout.css"
import {CartCard} from "./CartCard";


export const CheckoutProductsList=(props)=>{
    const deleteFromCart=(cartItem)=>{
        const phone= props.phones.map(phone=>{
            if(phone.id===cartItem.id){
                phone.quantity+=cartItem.quantity
            }
        })
        props.fromCart1(phone);
        props.fromCart2(cartItem);
    }
    let total=0;
    props.CartItems.map(product=>{
        total+=product.price
    });

    return(
        <>
            <div className="checkout__container" >
                <div className="checkout__inner">
                    <div className="checkout__form">
                        <h2 className="checkout__main-title">List Of Products:{props.CartItems.length}</h2>
                        <div className="checkout__list">
                            {props.CartItems.length !==0? props.CartItems.map((CartItem) =>
                                    <>
                                        <div  key={CartItem.id+ Math.random()}>
                                            <CartCard CartItem={CartItem} deleteFromCart={deleteFromCart}/>
                                        </div>

                                    </>)
                                : <div className="cart__empty" >Cart is empty</div>}
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