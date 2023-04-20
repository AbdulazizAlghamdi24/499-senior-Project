import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../Screens/RegisterSignInScreesn/SignInScreen';
import SignUpScreen from '../Screens/RegisterSignInScreesn/SignUpScreen';
import ConfirmEmailScreen from '../Screens/RegisterSignInScreesn/ConfirmEmailScreen';
import ForgotPasswordScreen from '../Screens/RegisterSignInScreesn/ForgotPasswordScreen';
import PasswordNewScreen from '../Screens/RegisterSignInScreesn/PasswordNewScreen';
import HomeScreen from '../Screens/RegisterSignInScreesn/HomeScreen';


const Stack = createStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={PasswordNewScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;