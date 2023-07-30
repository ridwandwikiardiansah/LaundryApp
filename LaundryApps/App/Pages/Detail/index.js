import React, { useState } from 'react';
import styles from './styles';
import back from '../../Asset/back.png';
import images from '../../Asset/detail.png';
import plus from '../../Asset/plus_circle.png';
import minus from '../../Asset/minus_circle.png';
import { Image, View, TouchableOpacity, Text, ToastAndroid } from 'react-native';

const Detail = ({ navigation }) => {
    const [quantity, setQuantity] = useState(0);

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

    return (
        <View style={styles.container}>
            <Image
                style={styles.images}
                source={images}
            />
            <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                <Image
                    style={styles.icon}
                    source={back}
                />
            </TouchableOpacity>
            <View style={styles.row}>
                <Text style={styles.label}>Jeans</Text>
                <Text style={styles.price}>$ 10.00</Text>
            </View>
            <View style={styles.rowContent}>
                <View style={styles.rowContent2}>
                    <View style={styles.type}>
                        <Text>Dry Clean</Text>
                    </View>
                    <View style={styles.type2}>
                        <Text>SWBL</Text>
                    </View>
                </View>
                <Text style={styles.stock}>2 Stock left!</Text>
            </View>
            <View style={styles.content}>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit diam, lobortis at auctor eu, tempus eget enim. Etiam ullamcorper risus ac diam pulvinar, a auctor nunc sagittis. In euismod est est, ac pretium sem egestas eget. Nunc mollis rutrum nisl lacinia convallis. Curabitur et arcu eros. Proin eu tellus augue. Vestibulum auctor risus erat, et tempor augue
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