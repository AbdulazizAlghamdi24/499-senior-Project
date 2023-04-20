import React from "react";
import CustomButton from "../CustomButton";

const SocialSignInButtons = () => {
    const onSignInwithFacebookPressed = () => {
        console.warn("signInwithFacebookPressed")
    }
    const onSignInwithGooglePressed = () => {
        console.warn("signInwithGooglePressed")
    }
    return (
        <>
        <CustomButton
        text="Sign Up with Facebook"
        onPress={onSignInwithFacebookPressed}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
        
        />
        <CustomButton
        text="Sign Up with Google"
        onPress={onSignInwithGooglePressed}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
        /> 
        </>
    )
}
export default SocialSignInButtons;