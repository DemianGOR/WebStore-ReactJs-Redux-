import React from "react";
import "../CSS/OrderCheckout.css"
import {CheckoutProductsList} from "./CheckoutProductsList";
import {useForm} from "react-hook-form";

export const OrderSubmit=(props)=>{
    const user= props.currentUser[0] !== undefined? props.currentUser[0] : {name:"",email:"" , img:"",address:"",phone:""}

    const {register,
        formState:{errors},
        handleSubmit,
        reset,
    }=useForm({defaultValues: {
            name: `${user.name}`,
            email: `${user.email}`,
            address:`${user.address}`,
            phone:`${user.phone}`
    }})



    const onSubmit = (data) => {
       const newData= {
           id:user.id,
           img: user.img,
           ...data
            }
            console.log(newData)
        user !==newData ? props.userSignIn(newData):console.log("already exist")
      reset()
    }
    return (<>
        <div className="order__container" >
            <div className="order__inner">
                <div className="order__form">
                    <h2 className="order__main-title">Order Checkout</h2>
                    <div className="order__main">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="order__input-section">
                            <p className="order__title">Name</p>
                            <input className="order__input" placeholder="Name"
                                   {...register("name",{
                                       required:"Field is required",
                                       minLength:{ value:5,message:"At least 5 symbols"},
                                       maxLength:{ value:25,message:"At max 25 symbols"}
                                   })}
                            />
                            <div  className="order__error">
                                {errors?.name&& <p>{errors?.name?.message || "Error!"}</p>}
                            </div>
                        </div>
                        <div className="order__input-section">
                            <p className="order__title">Email</p>
                            <input className="order__input" placeholder="Email" type="email"
                                   {...register("email",{
                                       required:"Field is required",
                                       minLength:{ value:11,message:"At least 11 symbols"},
                                       maxLength:{ value:35,message:"At max 35 symbols"}
                                   })}/>
                            <div  className="order__error">
                                {errors?.email&& <p>{errors?.email?.message || "Error!"}</p>}
                            </div>
                        </div>
                        <div className="order__input-section">
                            <p className="order__title">Address</p>
                            <input className="order__input" placeholder="Address" type="text"
                                   {...register("address",{
                                       required:"Field is required",
                                       minLength:{ value:5,message:"At least 5 symbols"},
                                       maxLength:{ value:5,message:"At max 5 symbols"}
                                   })}/>
                            <div  className="order__error">
                                {errors?.address&& <p>{errors?.address?.message || "Error!"}</p>}
                            </div>
                        </div>
                        <div className="order__input-section">
                            <p className="order__title">Phone number</p>
                            <input className="order__input" placeholder="Phone" type="tel"
                                   {...register("phone",{
                                       required:"Field is required",
                                       minLength:{ value:10,message:"NO least 10 symbols"},
                                       maxLength:{ value:10,message:"NO max 10 symbols"}
                                   })}/>
                            <div  className="order__error">
                                {errors?.phone&& <p>{errors?.phone?.message || "Error!"}</p>}
                            </div>
                        </div>
                        <p className="order__title">Your Wishes</p>
                        <textarea className="order__input-description" placeholder="Wishes" />
                            <input type="submit" className="button__submit" onSubmit={onSubmit}/>
                        </form>
                    </div>
                </div>
            </div>
            <CheckoutProductsList CartItems={props.CartItems} phones={props.phones} fromCart1={props.fromCart1} fromCart2={props.fromCart2}/>
        </div>
    </>);
}