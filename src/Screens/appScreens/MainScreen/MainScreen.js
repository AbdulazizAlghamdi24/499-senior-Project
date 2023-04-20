import React from "react";
import icon from '../../../../assets/icon1.png'
import {View , Text , StyleSheet , SafeAreaView , ScrollView , Image} from "react-native";

const MainScreen = () => {
    
    return (
        <ScrollView
        horizontal={true}
        >
        <SafeAreaView style={styles.container}>
            <View style={styles.MainView}>

                <Image style={styles.Image} source={icon}></Image>
                <View style={styles.circle}></View>
                <View style={styles.circle}></View>
                <View style={styles.circle}></View>
                <View style={styles.circle}></View>
            </View>
            
        </SafeAreaView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({

    container: {

        width: "100%",
        height: "30%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f8ff",
        
    },
    MainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    circle: {

        width: 100,
        height: 100,
        borderRadius: 50, // half of width and height
        backgroundColor: 'blue',
        marginHorizontal: 20, // half of width and height

    },

    Image: {
        width: 100,
        height: 100,
        borderRadius: 20, // half of width and height
        marginHorizontal: 20, // half of width and height
    }

})
export default MainScreen;