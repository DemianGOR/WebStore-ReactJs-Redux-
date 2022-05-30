import React, {useEffect} from "react";
import {CartCard} from "./CartCard";
import "../CSS/Cart.css";
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import {MyComponent} from "../Components/MyCommponent";

export const Cart=(props)=> {

    const CartItems = useSelector(state=>{
        const {cartReducer}=state;
        return cartReducer.cart
    })

    let total=0;
    CartItems.map(product=>{
        total+=product.price
    });


    return (
        <div className="cart__container">
            <div className="cart__inner">
                <h2 className="checkout__main-title">List Of Products:{CartItems.length}</h2>
                <div className="cart__list">
                    <MyComponent.isCartLengthExist CartItems={CartItems}>
                        {CartItems.map((item) =>
                            <div className="cart__items" key={item.cartId}>
                                <CartCard CartItem={item}/>
                            </div>)}
                    </MyComponent.isCartLengthExist>

                </div>
                <div className="total__section">
                    <h2 className="checkout__total">Total:</h2>
                    <h3 className="checkout__total">${total}</h3>
                </div>
                {CartItems.length !==0?
                    <Link to="/Cart/checkout"><button className="cart__button" onClick={()=>props.setActive(false)}>Submit Order</button></Link>
                    :<></>
                }

            </div>
        </div>
    );
}

