import React, {memo} from "react";
import "../CSS/ListOfItems.css";
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {addPhoneToCart, galleryFilling, quantityUpdate} from "../redux/actions";

const ItemCard=(props)=> {
    const dispatch = useDispatch();

    const addToCart=()=>{
        const cartItem= {...props.phone,cartId:Math.random()}
        dispatch(addPhoneToCart(cartItem));
        dispatch(quantityUpdate(cartItem.id,false))
    }

    return (
            <div  className="card__container" key={props.phone.id}>
                    <div className="card__inner">
                        <div className="first__section">
                            <img className="Card__item-img"  src={`${props.phone.image}`} alt="img"/>
                        </div>
                        <div className="second__section">
                            <Link to={`/${props.phone.id}`} className="Card__item-title"  >{props.phone.name}</Link>
                        </div>
                        <div className="third__section">
                            <div className="Card__item-price">{props.phone.price}$</div>
                            {props.phone.quantity !==0?
                                <button className="Card__item-button" onClick={addToCart}>Add to Cart</button>:
                                <div className="Card__item-notAvailable">Not Available</div>
                            }
                        </div>
                    </div>
                </div>
    );
}

export default  memo(ItemCard);