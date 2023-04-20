import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView , Image} from 'react-native';
import SignInScreen from './src/Screens/SignInScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import ConfirmEmailScreen from './src/Screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/Screens/ForgotPasswordScreen';
import PasswordNewScreen from './src/Screens/PasswordNewScreen';



export default function App() {
  const logo = require('./assets/logo.png');
  return (
    <SafeAreaView style={styles.root} >
     <PasswordNewScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    
  },
});

