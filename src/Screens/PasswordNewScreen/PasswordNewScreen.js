import React ,{ useState} from "react";

import {View , Text , Image , StyleSheet , useWindowDimensions , ScrollView} from "react-native";
import CustomInput from "../../Component/CustomInput/CustomInput";
import CustomButton from "../../Component/CustomButton/CustomButton";
import SocialSignInButtons from "../../Component/SocialSignInButtons/SocialSignInButtons";


const PasswordNewScreen = () => {
    const [code , setCode] = useState("");
    const [password , setPassword] = useState("");
    

   const onSumbetPressed = () => {
    console.warn("ForgotPasswordScreen");
   }



    return (
        <ScrollView>
        <View style={styles.root}>
    <Text style={styles.title}>Reset your password</Text>
            <CustomInput 
            placeholder="code"
            value={code}
            setValue={setCode}
             />
             <CustomInput 
            placeholder="New Password"
            value={password}
            setValue={setPassword}
             />

            <CustomButton
            text="Sumbet"
            onPress={onSumbetPressed}
            />

            <CustomButton
            text="back to sign in "
           type="TERTIARY"
       
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
        fontSize: 25,
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
export default PasswordNewScreen;