import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView , Image} from 'react-native';
import SignInScreen from './src/Screens/SignInScreen';

export default function App() {
  const logo = require('./assets/logo.png');
  return (
    <SafeAreaView style={styles.root} >
      <SignInScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    
  },
});

