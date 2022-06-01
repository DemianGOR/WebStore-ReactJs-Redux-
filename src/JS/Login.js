import {GoogleLogin} from "react-google-login";
import React from "react";
import {userSignIn} from "../redux/actions";
import {useDispatch,} from "react-redux";


const Login=()=>{
     const clientId ="YOUR_KEY_ID_FOR_GOOGLE_AUTH";
     const dispatch = useDispatch();
     const onSuccess=(res)=>{

         const user = {
             id:res.profileObj.googleId,
             name: res.profileObj.name,
             email:res.profileObj.email,
             img: res.profileObj.imageUrl,
             address: "",
             phone:""
         }
         console.log(user)
         dispatch(userSignIn(user))
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


export default Login;
