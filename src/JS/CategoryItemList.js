import React from "react";
import "../CSS/ListOfItems.css"
import ItemCard from "./ItemCard";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";


export const  CategoryItemList=(props)=>  {
    const phones = useSelector(state=>{
        const {phoneReducer}=state;
        return phoneReducer.phones
    })
    const params = useParams();
    const prodType = params.type;

    const onAddToCart =(cartItem)=>{
        props.onAddToCart(cartItem);
    }


    return (<>
            <div className="list__container">
                <div className="list__inner">
                    {phones.map((phone) => prodType === phone.type?
                        <div className="list__items" key={phone.id}  >
                            <ItemCard phone={phone} onAddToCart={onAddToCart}  />
                        </div>:<></>)}
                </div>
            </div>
        </>
    );
}

