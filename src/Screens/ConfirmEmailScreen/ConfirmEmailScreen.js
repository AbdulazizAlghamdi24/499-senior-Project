import React ,{ useState} from "react";

import {View , Text , Image , StyleSheet , useWindowDimensions , ScrollView} from "react-native";
import CustomInput from "../../Component/CustomInput/CustomInput";
import CustomButton from "../../Component/CustomButton/CustomButton";
import SocialSignInButtons from "../../Component/SocialSignInButtons/SocialSignInButtons";


const ConfirmEmailScreen = () => {
    const [code , setCode] = useState("");
    

   const onConfirmPressed = () => {
    console.warn("ConfirmEmailScreen");
   }



    return (
        <ScrollView>
        <View style={styles.root}>
    <Text style={styles.title}>Confirm your email</Text>
            <CustomInput 
            placeholder="code"
            value={code}
            setValue={setCode}
             />

            <CustomButton
            text="Confirm"
            onPress={onConfirmPressed}
            />

        
           
             <CustomButton
            text="Resend code "
            type='SECONDARY'
       
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
export default ConfirmEmailScreen;