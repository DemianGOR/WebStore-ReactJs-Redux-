import {GoogleLogin} from "react-google-login";
import React from "react";

 export const Login=(props)=>{
     const clientId ="INPUT_YOUR_CLIENTid.apps.googleusercontent.com"
     const onSuccess=(res)=>{
         console.log('Success,Current user',res.profileObj)
         const user = {
             id:res.profileObj.googleId,
             name: res.profileObj.name,
             email:res.profileObj.email,
             img: res.profileObj.imageUrl,
             address: "",
             phone:""
         }
         console.log(user)
         props.userSign(user)
     }
     const onFailure=(res)=>{
         console.log('ERROR',res)
     }

   return(
       <div id="signInButton">
           <GoogleLogin clientId={clientId}
                        buttonText={"Login"}
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}/>
       </div>
   )

};
