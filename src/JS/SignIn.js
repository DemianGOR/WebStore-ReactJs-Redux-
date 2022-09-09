import React, {useEffect} from "react";
import "../CSS/SignIn.css";
import { Routes,Route,Link} from 'react-router-dom';
import ListOfItems from "../Phones/JS/ListOfItems";
import Login from "./Login";



const SignIn=(props)=> {

    return (<>
        <div className="sign__container">
            <div className="sign__inner">
                <div className="sign__form">
                    <p className="sign__title">Email</p>
                    <input className="sign__input" placeholder="Email"/>
                    <p className="sign__title">Password</p>
                    <input className="sign__input" placeholder="Password"/>
                    <div className="sign__bottom">
                         <Link className="sign__go-back" to="/Home">←Back to Home page</Link>
                         <button className="sign__button">Enter</button>
                    </div>
                    <Login className="google__login" />
                </div>
            </div>
        </div>
            <Routes>
                <Route path="/Home" element={<ListOfItems />}/>
            </Routes>
        </>
    );
}

export default SignIn;