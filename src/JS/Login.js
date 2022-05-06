import {GoogleLogin} from "react-google-login";
import React from "react";

 export const Login=(props)=>{
     const clientId ="675266694834-ed76pk4qfh0qd3k8vtt0un7vsv0b3fn8.apps.googleusercontent.com"
     const onSuccess=(res)=>{
         console.log('Success,Current user',res.profileObj)
         const user = {
             id:res.profileObj.googleId,
             name: res.profileObj.name,
             email:res.profileObj.email,
             img: res.profileObj.imageUrl
         }
         console.log(user,"1")
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