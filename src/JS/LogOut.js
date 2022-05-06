import React from "react";
import "../CSS/SignIn.css"
export const LogOut=(props)=>{
    const onSuccess=()=>{
        props.signOut(true)
    }


    return(
        <div id="signOutButton">
            <button className="signOut" onClick={onSuccess}>Sign Out</button>
        </div>
    )

};