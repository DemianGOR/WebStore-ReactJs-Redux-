import React from "react";
import "../CSS/Cart.css";

 export const CartCard=(props)=> {
    const deleteFromCart=()=>{
        const cartItem= props.CartItem
        props.deleteFromCart(cartItem);
    }


    return (
        <div className="cartCard__container">
            <div key={props.CartItem.id} className="cartCard__inner">
                <div className="cartCard-first__section">
                    <img className="cartCard__item-img" src={`${props.CartItem.image}`} alt="img"/>
                </div>
                <div className="cartCard-second__section">
                    <div className="cartCard__item-title" >{props.CartItem.name}</div>
                </div>
                <div className="cartCard-third__section">
                    <button className="cartCard__item-button" onClick={deleteFromCart}>X</button>
                    <div className="cartCard__item-price">{props.CartItem.price}$</div>

                </div>

            </div>
        </div>
    );
}

