import React ,{ useState} from "react";

import {View , Text , Image , StyleSheet , useWindowDimensions , ScrollView} from "react-native";
import Logo from '../../../assets/logo.png'
import CustomInput from "../../Component/CustomInput/CustomInput";
import CustomButton from "../../Component/CustomButton/CustomButton";
import SocialSignInButtons from "../../Component/SocialSignInButtons/SocialSignInButtons";


const SignInScreen = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const {height} = useWindowDimensions();



    const onSignInPressed = () => {
        console.warn("signInPressed")
    }
    const onForgotPasswordPressed = () => {
        console.warn("forgotPasswordPressed")
    }
   


    return (
        <ScrollView>
        <View style={styles.root}>
            <Image 
            source={Logo} 
            style={[styles.logo , {height: height * 0.3}]} 
            resizeMode="contain"/>
            <CustomInput 
            placeholder="UserName"
            value={userName}
            setValue={setUserName}
              />
            <CustomInput 
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
            />

            <CustomButton
            text="Sign In"
            onPress={onSignInPressed}
            
            />
            <CustomButton
            text="Forget Password"
            onPress={onForgotPasswordPressed}
            type='TERTIARY'
            />
            
            <SocialSignInButtons/>

            <CustomButton
            text="Don't have an account?"
            onPress={onForgotPasswordPressed}
            type='TERTIARY'
            />
        </View>
        </ScrollView>

        
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 20
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 500,

    },
})
export default SignInScreen;