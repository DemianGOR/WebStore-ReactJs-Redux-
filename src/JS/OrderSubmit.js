import React, {useState} from "react";
import "../CSS/OrderCheckout.css"
import {CheckoutProductsList} from "./CheckoutProductsList";

export const OrderSubmit=(props)=>{

    const fromCart1=(phone)=>{
        props.fromCart1(phone);
    }
    const fromCart2=(phone)=>{
        props.fromCart2(phone);
    }

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("");
    const [wishes, setWishes] = useState("");


    const nameChangeHandler=(event)=>{
        setName(event.target.value);
    };
    const typeChangeHandler=(event)=>{
        setType(event.target.value);
    };
    const quantityChangeHandler=(event)=>{
        setAddress(event.target.value);
    };
    const priceChangeHandler=(event)=>{
        setEmail(event.target.value);
    };
    const descriptionChangeHandler=(event)=>{
        setWishes(event.target.value);
    };
    let text="gay"
    return (<>
        <div className="order__container" >
            <div className="order__inner">
                <div className="order__form">
                    <h2 className="order__main-title">Order Checkout</h2>

                    <div className="order__main">
                        <div className="order__input-section">
                            <p className="order__title">Name</p>
                            <input className="order__input" placeholder="Name" defaultValue="d" value="gay" type="text" value={text} onChange={nameChangeHandler}/>
                        </div>
                        <div className="order__input-section">
                            <p className="order__title">Email</p>
                            <input className="order__input" placeholder="Email" type="email" value={email} onChange={priceChangeHandler}/>
                        </div>
                        <div className="order__input-section">
                            <p className="order__title">Address</p>
                            <input className="order__input" placeholder="Address" type="text" value={address} onChange={quantityChangeHandler}/>
                        </div>
                        <p className="order__title">Your Wishes</p>
                        <textarea className="order__input-description" placeholder="Wishes"  value={wishes} onChange={descriptionChangeHandler}/>
                    </div>
                </div>
            </div>
            <CheckoutProductsList CartItems={props.CartItems} phones={props.phones} fromCart1={fromCart1} fromCart2={fromCart2}/>
        </div>
    </>);
}