import React, {memo, useEffect} from "react";
import {useParams} from "react-router-dom";
import "../CSS/ProductPage.css"


const ProductPage=(props)=>{
    useEffect(()=>{
    });

    const params = useParams();
    const prodId = params.id;
    const phone = props.phones.find((p)=>p.id ==prodId)

    const addToCart=()=>{
        const cartItem= phone
        props.onAddToCart(cartItem);

    }

    return(<>
    <div className="product__container">
        <div className="product__inner">
            <img src={`${phone.image}`} className="product__img" alt="img"/>
            <div className="product__name">{phone.name} </div>
            <div className="product__description">{phone.description}</div>
            <div className="bottom__section">
            <div className="product__quantity">In stock: {phone.quantity} </div>
            <div className="product__price">$ {phone.price} </div>
                {phone.quantity!==0?
                    <button className="product__button" onClick={addToCart}>Add to Cart</button>
                    :<div className="product__button">Not Available</div>
                }
            </div>
        </div>
    </div>

        </>
    )
};
export default memo(ProductPage);