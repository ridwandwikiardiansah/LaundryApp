import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Color from '../Constant/Color';


const Input = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.handleChange}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20
    },
    label: {
        color: Color.Main,
        marginBottom: 5,
        fontWeight: '400'
    },
    input: {
        width: '100%',
        height: 42,
        padding: 5,
        borderWidth: 1,
        borderColor: Color.Grey,
        borderRadius: 10
    }
})

export default Input