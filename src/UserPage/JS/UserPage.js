import React, {useEffect} from "react";
import "../SCSS/UserPage.css"
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {userSignIn} from "../../redux/actions";



export const UserPage=()=>{
    const dispatch = useDispatch();

    const user = useSelector(state=>{
        const {userReducer}=state;
        return  userReducer.user
    })


    const {register,
        formState:{errors},
        handleSubmit,
    }=useForm({defaultValues: {
            name: user.name,
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
        dispatch(userSignIn(newData))
    }
    return(
        <>
        <div className="userPage">
            <div className="userPage__container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="userPage__inner">
                <div className="userPage__main-background">
                    <img src={`${user.img}`} alt="img" className="userPage__img"/>
                    <div className="userPage__section1">
                        <div className="userPage__title">Name</div>
                        <input className="userPage__name"  type="text"
                               {...register("name",{
                                   required:"Field is required",
                                   minLength:{ value:1,message:"At least 3 symbols"},
                                   maxLength:{ value:25,message:"At max 25 symbols"}
                               })}
                        />
                        <div  className="order__error">
                            {errors?.name&& <p>{errors?.name?.message || "Error!"}</p>}
                        </div>
                    </div>
                </div>
                <h2 className="userPage__info-title">Your Information</h2>
                <div className="userPage__info-background">
                    <div className="userPage__title-email">Email</div>
                    <input className="userPage__email"  placeholder="not entered" type="email"
                           {...register("email",{
                               required:"Field is required",
                               minLength:{ value:11,message:"At least 11 symbols"},
                               maxLength:{ value:35,message:"At max 35 symbols"}
                           })}/>
                    <div  className="order__error">
                        {errors?.email&& <p>{errors?.email?.message || "Error!"}</p>}
                    </div>
                    <div className="userPage__title-address">Address</div>
                    <input className="userPage__address"   placeholder="not entered"  type="text"
                           {...register("address",{
                               required:"Field is required",
                               minLength:{ value:1,message:"At least 5 symbols"},
                               maxLength:{ value:5,message:"At max 5 symbols"}
                           })}/>
                    <div  className="order__error">
                        {errors?.address&& <p>{errors?.address?.message || "Error!"}</p>}
                    </div>
                    <div className="userPage__title-phone">Phone number</div>
                    <input className="userPage__phone"   placeholder="not entered" type="tel"  required
                           {...register("phone",{
                               required:"Field is required",
                               minLength:{ value:1,message:"NO leas than 10 symbols"},
                               maxLength:{ value:10,message:"NO more than 10 symbols"}
                           })}/>
                    <div  className="order__error">
                        {errors?.phone&& <p>{errors?.phone?.message || "Error!"}</p>}
                    </div>
                </div>


            </div>
                    <input type="submit" className="userPage__button" onSubmit={onSubmit}/>
                </form>

            </div>
        </div>

        </>
    )
}