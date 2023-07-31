import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Color from '../Constant/Color';
import eye from '../Asset/eye.png';


const Input = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <View style={styles.input}>
                <TextInput
                    placeholder={props.placeholder}
                    value={props.value}
                    onChangeText={props.handleChange}
                    secureTextEntry={props.secure}
                />
                {
                    props.type === 'password' ? (
                        <TouchableOpacity onPress={props.unSecure}>
                            <Image
                                style={styles.icon}
                                source={eye}
                            />
                        </TouchableOpacity>
                    ) : null
                }
            </View>
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
        padding: 5,
        borderWidth: 1,
        borderColor: Color.Grey,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 20
    },
})

export default Input