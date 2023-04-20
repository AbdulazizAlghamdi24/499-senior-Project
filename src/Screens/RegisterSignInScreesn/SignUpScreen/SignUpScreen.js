import React ,{ useState} from "react";

import {View , Text , Image , StyleSheet , useWindowDimensions , ScrollView} from "react-native";
import CustomInput from "../../../Component/CustomInput/CustomInput";
import CustomButton from "../../../Component/CustomButton/CustomButton";
import SocialSignInButtons from "../../../Component/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";


const SignUpScreen = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigation = useNavigation();
    

    const onRegisterPressed = () => {
        navigation.navigate("ConfirmEmail")
    }
    const onTermOfUsePressed = () => {
        console.warn("onTermOfUsePressed")
    }
    const onPrivacyPolicePressed = () => {
        console.warn("onPrivacyPolicePressed")
    }
    const onSignInPress = () => {
        navigation.navigate("SignIn");
    }




    return (
        <ScrollView>
        <View style={styles.root}>
    <Text style={styles.title}>Create an account</Text>
            <CustomInput 
            placeholder="UserName"
            value={userName}
            setValue={setUserName}
              />
            <CustomInput 
            placeholder="Email"
            value={email}
            setValue={setEmail}
            
            />
            <CustomInput 
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
              />
            <CustomInput 
            placeholder="Confirm Password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            secureTextEntry={true}
            />

            

            <CustomButton
            text="Register"
            onPress={onRegisterPressed}
            />

            <SocialSignInButtons/>

            <Text style={styles.text}>
                By Registering , you confirm that you accept our{' '} 
                <Text style={styles.link} onPress={onTermOfUsePressed}>Terms of Use </Text>and{' '} 
                <Text style={styles.link} onPress={onPrivacyPolicePressed}>Privacy Policy.</Text>
            </Text>
           
           

            <CustomButton
            text="Have an account? Sign in "
            type='TERTIARY'
            onPress={onSignInPress}
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
    title:{
        paddingTop: 50,
        marginBottom: 8,
        fontSize: 35,
        color: 'blue',
        fontWeight: "bold",
        textAlign: "center"
    },
    text: {
        color: 'grey',
        marginVertical: 10,
    },
    link: {
        color: 'blue',
        fontWeight: "bold",
        textAlign: "center"
    }

})
export default SignUpScreen;