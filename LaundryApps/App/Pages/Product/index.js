import React, { useState, useEffect } from 'react';
import styles from './styles';
import Header from '../../Component/Header';
import { View, Text, Image, ScrollView, ToastAndroid } from 'react-native';
import SearchBox from '../../Component/SearchBox';
import ProductItem from '../../Component/ProductItem';
import images from '../../Asset/detail.png';
import { API } from '../../Util/Api';
import ENDPOINT from '../../Util/Endpoint';
import { map } from 'lodash';

const Product = ({ navigation }) => {
    const [product, setProduct] = useState([])

    const getProduct = async () => {
        const product = await API.get(ENDPOINT.PRODUCT)
        setProduct(product.data.response)
    }

    const searchProduct = async (p) => {
        const search = await API.get(ENDPOINT.PRODUCT + '/' + p)
        if (search.data.response) {
            ToastAndroid.show(search.data.message, ToastAndroid.SHORT);
            setProduct(search.data.response)
        } else {
            ToastAndroid.show(search.data.message, ToastAndroid.SHORT);
        }
    }

    const navigateToDetail = (p) => {
        navigation.navigate('Detail', p)
    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={styles.card}>
                <Image style={styles.imageProduct} source={images} />
                <SearchBox placeholder='Search products by ID' handleChange={searchProduct} />
                <Text style={styles.typeText}>Dry Cleaning</Text>
                <ScrollView contentContainerStyle={styles.productContainer}>
                    {
                        product.length > 1 ?
                            map(product, (a, i) => (
                                <ProductItem
                                    key={i}
                                    data={a.image ? { uri: a.image } : images}
                                    title={a.name || " "} price={a.price || " "}
                                    click={() => navigateToDetail(a)} />
                            )) : (
                                <ProductItem
                                    data={product.image ? { uri: product.image } : images}
                                    title={product.name || " "}
                                    price={product.price || " "}
                                    click={() => navigateToDetail(product)} />
                            )
                    }
                </ScrollView>
            </View>
        </ScrollView>
    )
}

export default Product;