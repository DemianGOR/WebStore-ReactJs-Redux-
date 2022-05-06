import React from "react";
import "../CSS/ListOfItems.css"
import ItemCard from "./ItemCard";
import {useParams} from "react-router-dom";


const  ListOfItems=(props)=>  {
    const params = useParams();
    const prodType = params.type;
    const type = props.phones.find((p)=>p.type ==prodType)

    const onAddToCart =(cartItem)=>{
        props.onAddToCart(cartItem);
    }

    return (<>
        <div className="list__container">
            <div className="list__inner">
                {props.phones.map((phone) => type !== undefined&type ===phone.type?
                    <div className="list__items"key={phone.id}  >
                        <ItemCard phone={phone} onAddToCart={onAddToCart} phones={props.phones} />
                    </div>:<div className="list__items"key={phone.id}  >
                        <ItemCard phone={phone} onAddToCart={onAddToCart} phones={props.phones} />
                    </div>)}
            </div>
        </div>
        </>
    );
}

export default ListOfItems;