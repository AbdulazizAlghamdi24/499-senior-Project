import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView , Image} from 'react-native';

import Navigation from './src/navigation';



export default function App() {
  const logo = require('./assets/logo.png');
  return (
    <SafeAreaView style={styles.root} >
     <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    
  },
});

