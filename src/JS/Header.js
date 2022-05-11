import React, {useState} from "react";
import "../CSS/Header.css"
import {Link, Outlet} from 'react-router-dom'
import {LogOut} from "./LogOut";
import {ModalWindow} from "../Components/ModalWindow";
import {Cart} from "./Cart";
import {UserPage} from "./UserPage";


export const Header=(props)=> {
    const[modalActiveCart,setModalActiveCart]=useState()
    const[modalActiveUser,setModalActiveUser]=useState()
    const[modalActiveUserFlag,setModalActiveUserFlag]=useState()



    const pass = {
        id: "102414693701386840515",
    }

        return (<>
        <div className="header__container">
            <div className="header__inner" >
                <ul className="header__menu">
                    <li className="header__menu-item"><Link className="header__menu-item" to="Home">Home</Link></li>
                    <li className="header__menu-item" >Catalog
                        <ul className="header__menu">
                            <li className="header__menu-item"><Link className="link__off" to={`Home/${"Iphone"}`}>Iphone</Link></li>
                            <li className="header__menu-item" ><Link className="link__off" to={`Home/${"Meizu"}`}>Meizu</Link></li>
                            <li className="header__menu-item"><Link  className="link__off" to={`Home/${"Huawei"}`}>Huawei</Link></li>
                            <li className="header__menu-item" ><Link className="link__off" to={`Home/${"Oppo"}`}>Oppo</Link></li>
                        </ul>

                    </li>

                    <li className="header__menu-item" onClick={()=>setModalActiveCart(true)} >Cart</li>

                    {props.currentUser.map((user) =>( user.id=== pass.id?
                    <li className="header__menu-item"><Link className="item__list" to="Add">Add Product</Link></li>:<></>
                    ))}
                    {props.currentUser.length === 0?
                        <button className="button__sign">
                            <Link className="link__off" to="SignIn">Sign in</Link>
                        </button>:
                        <div className="user__container ">
                            {props.currentUser.map((user) => (
                                <div className="user__container "  key={user.id}>
                                    <div className="user__name ">{user.name}
                                        <div tabIndex="0" onClick={()=>{setModalActiveUser(true);setModalActiveUserFlag(true)}} className="user__menu-item" >Account</div>
                                        <div className="user__menu-item"><LogOut signOut={props.signOut}/></div>
                                    </div>
                                    <img className="user__img" src={user.img} alt="img"/>
                                </div>))}
                        </div>
                    }
                </ul>
                    <Outlet/>
            </div>
            <ModalWindow active={modalActiveCart} setActive={setModalActiveCart} flag={modalActiveUserFlag}
                         setFlag={setModalActiveUserFlag}>
                <Cart CartItems ={props.CartItems}
                      fromCart1={props.fromCart1}
                      fromCart2={props.fromCart2}
                      phones={props.phones}
                      active={modalActiveCart} setActive={setModalActiveCart}/>
           </ModalWindow>
                <ModalWindow className="user__modal" active={modalActiveUser}
                             setActive={setModalActiveUser}
                             flag={modalActiveUserFlag}
                             setFlag={setModalActiveUserFlag}>
                    <UserPage user={props.currentUser[0]} userSignIn={props.userSignIn}/>
                </ModalWindow>:
        </div>

        </>
    );
}

