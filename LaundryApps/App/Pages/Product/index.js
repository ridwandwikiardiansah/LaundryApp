import React from 'react';
import styles from './styles';
import Header from '../../Component/Header';
import { View, Text, Image, ScrollView } from 'react-native';
import SearchBox from '../../Component/SearchBox';
import ProductItem from '../../Component/ProductItem';
import images from '../../Asset/detail.png';

const Product = () => {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={styles.card}>
                <Image style={{ width: '100%', height: 192, alignSelf: 'center', borderRadius: 10 }} source={images} />
                <SearchBox placeholder='Search products' />
                <Text style={styles.typeText}>Dry Cleaning</Text>
                <ScrollView contentContainerStyle={styles.productContainer}>
                    <ProductItem data={images} title={"Jeans"} price={"$ 10.00"} />
                    <ProductItem data={images} title={"Jeans"} price={"$ 10.00"} />
                    <ProductItem data={images} title={"Jeans"} price={"$ 10.00"} />
                    <ProductItem data={images} title={"Jeans"} price={"$ 10.00"} />
                </ScrollView>
            </View>
        </ScrollView>
    )
}

export default Product;