import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import Color from '../Constant/Color';


const SearchBox = (props) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.icon}
                source={{uri: "https://img.freepik.com/free-icon/search_318-129530.jpg?size=626&ext=jpg"}} 
            />
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
        height: 42,
        padding: 5,
        borderWidth: 1,
        borderColor: Color.Grey,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.White2,
        marginVertical: 30
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 20
    },
    input: {
        width: '100%',
        height: 42,
    }
})

export default SearchBox