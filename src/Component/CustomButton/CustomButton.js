import React , {useState} from 'react';

import { StyleSheet, Text, View , Pressable } from'react-native';

const CustomButton = ({onPress , text , type = "PRIMARY" , bgColor , fgColor}) => {
    const [count, setCount] = useState(0);
    return (
        <Pressable style={
            [styles.container ,
                 styles[`container_${type}`],
                 bgColor ? {backgroundColor : bgColor} : {}
                 
                ]}
        onPress={onPress}
        >
            <Text
            style={
                [styles.text ,
                     styles[`text_${type}`],
                     fgColor? {color : fgColor} : {}
                    ]}
            >{text} </Text>
            
        </Pressable>
        
    )
}

const styles = StyleSheet.create({

container:{
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical : 6,
},

container_PRIMARY: {
    backgroundColor: '#3B71F3',
},

container_TERTIARY: {},


text: {
    fontWeight: 'bold',
    color: 'white',
},

text_TERTIARY: {
    color: 'grey',
},


})
export default CustomButton;