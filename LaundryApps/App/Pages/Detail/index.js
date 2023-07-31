import React, { useEffect, useState } from 'react';
import styles from './styles';
import back from '../../Asset/back.png';
import images from '../../Asset/detail.png';
import plus from '../../Asset/plus_circle.png';
import minus from '../../Asset/minus_circle.png';
import { API } from '../../Util/Api';
import ENDPOINT from '../../Util/Endpoint';
import { Image, View, TouchableOpacity, Text, ToastAndroid } from 'react-native';
import { find } from 'lodash';

const Detail = (props) => {
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState({})
    const data = props.route.params;

    const handleIncrease = () => {
        setQuantity(quantity + 1)
    }

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        } else {
            ToastAndroid.show('Jumlah barang tidak boleh kurang dari 0', ToastAndroid.SHORT);
        }
    }

    const getCategory = async () => {
        const category = await API.get(ENDPOINT.CATEGORY)
        const id = find(category.data.response, (a, i) => { if (a.id == data.category_id) return a })
        setCategory(id)
    }

    useEffect(() => {
        getCategory();
    }, [])

    return (
        <View style={styles.container}>
            <Image
                style={styles.images}
                source={data.image ? { uri: data.image } : images}
            />
            <TouchableOpacity style={styles.buttonBack} onPress={() => props.navigation.goBack()}>
                <Image
                    style={styles.icon}
                    source={back}
                />
            </TouchableOpacity>
            <View style={styles.row}>
                <Text style={styles.label}>{data.name}</Text>
                <Text style={styles.price} numberOfLines={1}>Rp.{data.price}</Text>
            </View>
            <View style={styles.rowContent}>
                <View style={styles.rowContent2}>
                    <View style={styles.type}>
                        <Text>{category ? category.name : 'category'} </Text>
                    </View>
                    <View style={styles.type2}>
                        <Text>{data.sku}</Text>
                    </View>
                </View>
                <Text style={styles.stock}>{data.stock} Stock left!</Text>
            </View>
            <View style={styles.content}>
                <Text>
                    {data.description}
                </Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={handleDecrease}>
                        <Image source={minus} style={styles.iconQuantity} />
                    </TouchableOpacity>
                    <View style={styles.quantity}>
                        <Text style={styles.quantityText}>{quantity}</Text>
                    </View>
                    <TouchableOpacity onPress={handleIncrease}>
                        <Image source={plus} style={styles.iconQuantity} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Detail;