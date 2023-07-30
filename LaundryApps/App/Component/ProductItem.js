import React from 'react';
import { TouchableOpacity, StyleSheet, Image, Text, Dimensions } from 'react-native';
import Color from '../Constant/Color';

const viewPortWidth = Dimensions.get('window').width;

const ProductItem = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.click}>
            <Image
                style={styles.images}
                source={props.data}
                resizeMethod='auto'
                resizeMode='contain'
            />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>{props.price}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: (viewPortWidth / 2) - 30,
        marginVertical: 10
    },
    images: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 16,
        color: Color.Black,
        fontWeight: '600',
        marginTop: 8
    },
    price: {
        color: Color.Secondary
    }
})

export default ProductItem