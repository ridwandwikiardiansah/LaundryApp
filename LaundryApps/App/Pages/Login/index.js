import React from 'react';
import styles from './styles';
import Vector from '../../Asset/Vector.png';
import Input from '../../Component/Input';
import { View, Text, Image, Button } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <Image source={Vector} style={styles.rectangle} />
            <Text style={styles.titleText}>Be Laundry</Text>
            <Text style={styles.titleText2}>Sign in to Your Account</Text>
            <Text style={styles.titleText3}>To enter our app, you must sign in first</Text>
            <View style={styles.card}>
                <Input label="Email" placeholder="Masukkan Email" />
                <Input label="Password" placeholder="Masukkan Password" />
                <Button title="Sign in" />

            </View>

        </View>
    )
}

export default Login;