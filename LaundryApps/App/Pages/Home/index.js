import React, { useEffect, useState } from 'react';
import styles from './styles';
import Header from '../../Component/Header';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { API } from '../../Util/Api';
import ENDPOINT from '../../Util/Endpoint';
import AsyncStorage from '@react-native-async-storage/async-storage';
import detail from '../../Asset/detail.png';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../../Constant/Color';
import note from '../../Asset/note.png';

const Home = ({ navigation }) => {
    const [user, setUser] = useState({})

    const getUser = async () => {
        const token = await AsyncStorage.getItem('token')
        console.log(token)
        const options = {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
        }
        const userInfo = await API.get(ENDPOINT.USER)
        console.log(userInfo)
    }

    useEffect(() => {
        getUser();
    }, [])

    const navigateToDetail = () => {
        navigation.navigate('Detail')
    }

    const navigateToSummary = () => {
        navigation.navigate('Summary')
    }

    const navigateToProduct = () => {
        navigation.navigate('Product')
    }


    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={styles.card}>
                <View style={styles.userContainer}>
                    <Image style={styles.avatar} source={{ uri: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg" }} />
                    <View>
                        <Text style={styles.greeting}>Good Morning!</Text>
                        <Text style={styles.username}>John Doe</Text>
                    </View>
                    <View style={styles.saldoContainer}>
                        <Text style={styles.labelSaldo}>
                            Your Balance
                        </Text>
                        <Text style={styles.saldo}>$ 14 000 000</Text>
                    </View>
                </View>
                <View style={styles.menuContainer}>
                    <View style={styles.menuCard}>
                        <Image style={styles.avatar} source={detail} />
                        <Text>Dry Clean</Text>
                    </View>
                    <View style={styles.menuCard}>
                        <Image style={styles.avatar} source={detail} />
                        <Text>Dry Clean</Text>
                    </View>
                </View>
                <Text style={styles.labelType}>Latest Order</Text>
                <TouchableOpacity style={styles.orderContainer} onPress={navigateToSummary}>
                    <Image style={styles.imagesOrder} source={detail} />
                    <View style={styles.textOrderContainer}>
                        <Text>Order ID: #2134</Text>
                        <View style={styles.order}>
                            <Text style={styles.labelOrder}>Total Order</Text>
                            <Text style={styles.price}>$ 180 00</Text>
                        </View>
                    </View>
                    <View style={styles.invoiceContainer}>
                        <Image style={styles.avatar} source={note} />
                        <Text style={styles.invoiceLabel}>INVOICE</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.labelType}>Your most ordered product</Text>
                <TouchableOpacity onPress={navigateToProduct}>
                    <ImageBackground source={detail} style={styles.productBackground} imageStyle={styles.radius}>
                        <LinearGradient colors={[Color.Aqua, Color.Main,]} style={styles.blue} />
                        <Text style={styles.titleProduct}>Dry Cleaning</Text>
                        <Text style={styles.subtitle}>12x | total of $ 4.000</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <Text style={styles.labelType}>Our latest product</Text>
                <View style={styles.latestContainer}>
                    <TouchableOpacity onPress={navigateToDetail}>
                        <ImageBackground source={detail} style={styles.productLatestBackground} imageStyle={styles.radius}>
                            <LinearGradient colors={[Color.Aqua, Color.Main,]} style={styles.blue} />
                            <Text style={styles.latestTitle}>Jeans</Text>
                            <Text style={styles.latestLabel}>$ 10.00/pc</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <ImageBackground source={detail} style={styles.productLatestBackground} imageStyle={styles.radius}>
                        <LinearGradient colors={[Color.Aqua, Color.Main,]} style={styles.blue} />
                        <Text style={styles.latestTitle}>Jeans</Text>
                        <Text style={styles.latestLabel}>$ 10.00/pc</Text>
                    </ImageBackground>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home;