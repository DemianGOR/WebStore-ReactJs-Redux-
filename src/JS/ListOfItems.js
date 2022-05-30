import React from "react";
import "../CSS/ListOfItems.css"
import ItemCard from "./ItemCard";
import {useSelector} from "react-redux";


const  ListOfItems=(props)=>  {

    const phones = useSelector(state=>{
        const {phoneReducer}=state;
        return phoneReducer.phones
    })
    const onAddToCart =(cartItem)=>{
        props.onAddToCart(cartItem);
    }

    return (<>
        <div className="list__container">
            <div className="list__inner">
                {phones.map((phone) =>
                    <div className="list__items" key={phone.id}  >
                        <ItemCard phone={phone} onAddToCart={onAddToCart} phones={phones} />
                    </div>)}
            </div>
        </div>
        </>
    );
}

export default ListOfItems;