import React from "react";
import {CartCard} from "./CartCard";
import "../CSS/Cart.css";
import {Link} from 'react-router-dom';

export const Cart=(props)=> {
    const deleteFromCart=(cartItem)=>{
        const phone= props.phones.map(phone=>{
            if(phone.id===cartItem.id){
                phone.quantity+=cartItem.quantity
            }
        })
        props.fromCart1(phone);
        props.fromCart2(cartItem);    }

    let total=0;
    props.CartItems.map(product=>{
        total+=product.price
    });
    return (
        <div className="cart__container">
            <div className="cart__inner">
                <h2 className="checkout__main-title">List Of Products:{props.CartItems.length}</h2>
                <div className="cart__list">
                {props.CartItems.length !==0? props.CartItems.map((CartItem) =>
                    <>
                    <div className="cart__items" key={CartItem.id+ Math.random()}>
                        <CartCard CartItem={CartItem} deleteFromCart={deleteFromCart}/>
                    </div>
                    </>)
                : <div className="cart__empty" >Cart is empty</div>}
                </div>
                <div className="total__section">
                    <h2 className="checkout__total">Total:</h2>
                    <h3 className="checkout__total">$ {total}</h3>
                </div>
                {props.CartItems.length !==0?
                    <Link to="/Cart/checkout"><button className="cart__button" onClick={()=>props.setActive(false)}>Submit Order</button></Link>
                    :<></>
                }

            </div>
        </div>
    );
}

