import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Color from '../Constant/Color';

const Header = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Be Laundry</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: 80,
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: Color.Red,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '500',
        color: Color.White
    }
})


export default Header;