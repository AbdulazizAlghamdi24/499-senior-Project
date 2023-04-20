import React ,{ useState} from "react";

import {View , Text , Image , StyleSheet , useWindowDimensions , ScrollView} from "react-native";
import CustomInput from "../../../Component/CustomInput/CustomInput";
import CustomButton from "../../../Component/CustomButton/CustomButton";
import SocialSignInButtons from "../../../Component/SocialSignInButtons/SocialSignInButtons";

import {useNavigation} from "@react-navigation/native";


const ForgotPasswordScreen = () => {
    const [userName , setUserName] = useState("");
    const navigation = useNavigation();

    

   const onSendPressed = () => {
    navigation.navigate("NewPassword")
    
   }
   
   const onPackToSignIn = () => {
    
    navigation.navigate("SignIn");
   }



    return (
        <ScrollView>
        <View style={styles.root}>
    <Text style={styles.title}>Reset your password</Text>
            <CustomInput 
            placeholder="UserName"
            value={userName}
            setValue={setUserName}
             />

            <CustomButton
            text="Send"
            onPress={onSendPressed}
            />

            <CustomButton
            text="back to sign in "
           type="TERTIARY"
           onPress={onPackToSignIn}
       
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
export default ForgotPasswordScreen;