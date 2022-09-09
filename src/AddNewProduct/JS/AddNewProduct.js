import React, {useState} from "react";
import "../SCSS/NewProduct.css"
import {InputPhotoBase64} from "./InputPhotoBase64";
import {useDispatch} from "react-redux";
import {addPhone} from "../../redux/actions";

const  AddNewProduct=()=>  {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");


    const nameChangeHandler=(event)=>{
        setName(event.target.value);
    };
    const typeChangeHandler=(event)=>{
        setType(event.target.value);
    };
    const quantityChangeHandler=(event)=>{
        setQuantity(event.target.value);
    };
    const priceChangeHandler=(event)=>{
        setPrice(event.target.value);
    };
    const descriptionChangeHandler=(event)=>{
        setDescription(event.target.value);
    };

    const dispatch = useDispatch();


    const createNewPhone=(photo)=>{

        const phone={
            ...photo,
            id: Math.random(),
            name: name,
            quantity: quantity,
            price: price,
            type:type,
            description:description,
        };
        dispatch(addPhone(phone));
        setName("");
        setQuantity("");
        setPrice("");
        setType("");
        setDescription("");



    }
    return (<>
        <div className="newAdd__container" >
            <div className="newAdd__inner">
                <div className="newAdd__form">
                    <p className="newAdd__title">Name</p>
                    <input className="newAdd__input" placeholder="Name"  type="text" value={name} onChange={nameChangeHandler}/>
                    <p className="newAdd__title">Brand</p>
                    <input className="newAdd__input" placeholder="Brand"  type="text" value={type} onChange={typeChangeHandler}/>
                    <p className="newAdd__title">Price</p>
                    <input className="newAdd__input" placeholder="Price" type="number" value={price} onChange={priceChangeHandler}/>
                    <p className="newAdd__title">Quantity</p>
                    <input className="newAdd__input" placeholder="Quantity" type="number" value={quantity} onChange={quantityChangeHandler}/>
                    <p className="newAdd__title">Description</p>
                    <textarea className="newAdd__input-description" placeholder="Description"  value={description} onChange={descriptionChangeHandler}/>
                </div>

                <div className="newAdd__form-photos">
                    <InputPhotoBase64 onAddPhoto={createNewPhone}/>
                </div>
            </div>
        </div>
    </>);
}

export default AddNewProduct;