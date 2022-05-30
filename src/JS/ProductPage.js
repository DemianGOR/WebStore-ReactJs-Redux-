import React, {memo} from "react";
import {useParams} from "react-router-dom";
import "../CSS/ProductPage.css"
import {useDispatch, useSelector} from "react-redux";
import {addPhoneToCart, quantityUpdate} from "../redux/actions";


const ProductPage=()=>{

    const phones = useSelector(state=>{
        const {phoneReducer}=state;
        return phoneReducer.phones
    })

    const params = useParams();
    const prodId = params.id;
    const phone = phones.find((p)=>p.id ==prodId)

    const dispatch = useDispatch();

    const addToCart=()=>{
        const cartItem= {...phone,cartId:Math.random()}
        dispatch(addPhoneToCart(cartItem));
        dispatch(quantityUpdate(cartItem.id,false))
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