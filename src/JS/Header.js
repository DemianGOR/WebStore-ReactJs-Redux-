import React, {useState} from "react";
import "../CSS/Header.css"
import {Link, Outlet} from 'react-router-dom'
import {ModalWindow} from "../Components/ModalWindow";
import {Cart} from "../Cart/JS/Cart";
import {UserPage} from "../UserPage/JS/UserPage";
import {useDispatch, useSelector} from "react-redux";
import { userSignOut} from "../redux/actions";
import {MyComponent} from "../Components/MyCommponent";


const Header=()=> {
    const[modalActiveCart,setModalActiveCart]=useState()
    const[modalActiveUser,setModalActiveUser]=useState()
    const[modalActiveUserFlag,setModalActiveUserFlag]=useState()

    const user = useSelector(state=>{
        const {userReducer}=state;
        return userReducer.user
    })

    const dispatch=useDispatch();

    const signIn =(
        <button className="button__sign">
            <Link className="link__off" to="SignIn">Sign in</Link>
        </button>)


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
                    <li className="header__menu-item"><Link className="header__menu-item" to="Gallery">Gallery</Link></li>
                    <li className="header__menu-item" onClick={()=>setModalActiveCart(true)} >Cart</li>

                    <MyComponent.isUserAdmin userId={user.id}>
                        <li className="header__menu-item"><Link className="item__list" to="Add">Add Product</Link></li>
                    </MyComponent.isUserAdmin>

                    <MyComponent.isUserAuth id={user.id} different={signIn}>
                        <div className="user__container ">
                                <div className="user__container "  key={user.id}>
                                    <div className="user__name ">{user.name}
                                        <div tabIndex="0" onClick={()=>{setModalActiveUser(true);setModalActiveUserFlag(true)}} className="user__menu-item" >Account</div>
                                        <div className="user__menu-item" onClick={()=>dispatch(userSignOut())}>Logout</div>
                                    </div>
                                    <img className="user__img" src={user.img} alt="img"/>
                                </div>
                        </div>
                    </MyComponent.isUserAuth>
                </ul>
                    <Outlet/>
            </div>
            <ModalWindow active={modalActiveCart} setActive={setModalActiveCart} flag={modalActiveUserFlag}
                         setFlag={setModalActiveUserFlag}>
                <Cart setActive={setModalActiveCart}/>
           </ModalWindow>
            <ModalWindow className="user__modal" active={modalActiveUser}
                             setActive={setModalActiveUser}
                             flag={modalActiveUserFlag}
                             setFlag={setModalActiveUserFlag}>
                <UserPage/>
            </ModalWindow>
        </div>

        </>
    );
}


export default Header;