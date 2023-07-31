import React, { useState } from 'react';
import styles from './styles';
import Vector from '../../Asset/Vector.png';
import Input from '../../Component/Input';
import { View, Text, Image, Button, Alert } from 'react-native';
import { API } from '../../Util/Api';
import Endpoint from '../../Util/Endpoint';
import { isEmpty } from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [secure, setSecure] = useState(false);

    const onPressLogin = async () => {
        const body = {
            email,
            password
        }
        const Login = await API.post(Endpoint.LOGIN, body)
        if (Login.data.status && !isEmpty(email) && !isEmpty(password)) {
            await AsyncStorage.setItem('token', Login.data.response)
            Alert.alert(`Halo ${email}, Selamat Datang!`)
            props.navigation.navigate('Home')
        } else if (email === '' || password === '') {
            Alert.alert('Email atau Password tidak boleh kosong!')
        } else {
            Alert.alert(Login.data.message)
        }
    }

    return (
        <View style={styles.container}>
            <Image source={Vector} style={styles.rectangle} />
            <Text style={styles.titleText}>Be Laundry</Text>
            <Text style={styles.titleText2}>Sign in to Your Account</Text>
            <Text style={styles.titleText3}>To enter our app, you must sign in first</Text>
            <View style={styles.card}>
                <Input
                    label="Email"
                    placeholder="Masukkan Email"
                    handleChange={(e) => setEmail(e)}
                />
                <Input
                    label="Password"
                    placeholder="Masukkan Password"
                    handleChange={(e) => setPassword(e)}
                    secure={!secure}
                    type={'password'}
                    unSecure={() => setSecure(!secure)}
                />
                <Button title="Sign in" onPress={onPressLogin} />
            </View>

        </View>
    )
}

export default Login;