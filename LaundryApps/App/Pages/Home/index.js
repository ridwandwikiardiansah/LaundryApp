import React, { useEffect, useState } from 'react';
import styles from './styles';
import Header from '../../Component/Header';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { API } from '../../Util/Api';
import ENDPOINT from '../../Util/Endpoint';
import { map } from 'lodash';
import detail from '../../Asset/detail.png';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../../Constant/Color';
import note from '../../Asset/note.png';

const Home = ({ navigation }) => {
    const [user, setUser] = useState({})
    const [category, setCategory] = useState({})
    const [product, setProduct] = useState({})

    const getUser = async () => {
        const userInfo = await API.get(ENDPOINT.USER)
        setUser(userInfo.data.response)
    }

    const getCategory = async () => {
        const category = await API.get(ENDPOINT.CATEGORY)
        setCategory(category.data.response)
    }

    const getProduct = async () => {
        const product = await API.get(ENDPOINT.PRODUCT)
        setProduct(product.data.response)
    }

    useEffect(() => {
        getUser();
        getCategory();
        getProduct();
    }, [])

    const navigateToDetail = (p) => {
        navigation.navigate('Detail', p)
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
                        <Text style={styles.username}>{user.name}</Text>
                    </View>
                    <View style={styles.saldoContainer}>
                        <Text style={styles.labelSaldo}>
                            Your Balance
                        </Text>
                        <Text style={styles.saldo}>$ 14 000 000</Text>
                    </View>
                </View>
                <ScrollView
                    style={styles.scroll}
                    contentContainerStyle={styles.menuContainer}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {
                        category ? map(category, (a, i) => (
                            <View style={styles.menuCard} key={i}>
                                <Image style={styles.avatar} source={detail} />
                                <Text>{a.name}</Text>
                            </View>
                        )) : (
                            <View style={styles.menuCard}>
                                <Image style={styles.avatar} source={detail} />
                                <Text>Dry Clean</Text>
                            </View>
                        )
                    }
                </ScrollView>
                <Text style={styles.labelType}>Latest Order</Text>
                <TouchableOpacity style={styles.orderContainer} onPress={navigateToSummary}>
                    <Image style={styles.imagesOrder} source={detail} />
                    <View style={styles.textOrderContainer}>
                        <Text style={styles.id}>Order ID: #2134</Text>
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
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}>
                        {
                            product ?
                                map(product, (p, i) => (
                                    <TouchableOpacity onPress={() => navigateToDetail(p)} key={i}>
                                        <ImageBackground source={p.image ? { uri: p.image } : detail} style={styles.productLatestBackground} imageStyle={styles.radius}>
                                            <LinearGradient colors={[Color.Aqua, Color.Main,]} style={styles.blue} />
                                            <Text style={styles.latestTitle} numberOfLines={1}>{p.name}</Text>
                                            <Text style={styles.latestLabel}>Rp.{p.price}/pc</Text>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                )) : (
                                    <ImageBackground source={detail} style={styles.productLatestBackground} imageStyle={styles.radius}>
                                        <LinearGradient colors={[Color.Aqua, Color.Main,]} style={styles.blue} />
                                        <Text style={styles.latestTitle} numberOfLines={1}>Nama Product</Text>
                                        <Text style={styles.latestLabel}>Harga Product</Text>
                                    </ImageBackground>
                                )
                        }
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home;