import React from 'react';

import {View , Text , TextInput , StyleSheet} from'react-native';

const CustomInput = ({value , setValue , placeholder , secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
>
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: "white",
        width: "100%",
        borderColor: "#e8e8e8",
        borderWidth: 1,
        borderRadius: 5, 
        padding: 10,
        marginBottom: 10,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    input: {

    },
});

export default CustomInput;