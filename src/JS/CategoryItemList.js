import React, {useEffect} from "react";
import "../CSS/ListOfItems.css"
import ItemCard from "./ItemCard";
import {useParams} from "react-router-dom";


export const  CategoryItemList=(props)=>  {
    const params = useParams();
    const prodType = params.type;

    const onAddToCart =(cartItem)=>{
        props.onAddToCart(cartItem);
    }
    useEffect(()=>{
        console.log("gay")
    })

    return (<>
            <div className="list__container">
                <div className="list__inner">
                    {props.phones.map((phone) => prodType === phone.type?
                        <div className="list__items"key={phone.id}  >
                            <ItemCard phone={phone} onAddToCart={onAddToCart} phones={props.phones} />
                        </div>:<></>)}
                </div>
            </div>
        </>
    );
}

