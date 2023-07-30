import React from 'react';
import styles from './styles';
import { View, Text, Image } from 'react-native';
import chat from '../../Asset/chat.png';
import detail from '../../Asset/detail.png';

const Summary = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.titleHeader}>ORDER #21340</Text>
                </View>
                <View style={styles.cardBody}>
                    <View style={styles.row}>
                        <View>
                            <Text style={styles.labelLocation}>Outlet Location</Text>
                            <Text style={styles.textLocation}>Sahid Sudirman</Text>
                        </View>
                        <Text style={styles.address}>123 Pasir Ris, 13810, Singapore</Text>
                    </View>
                    <View style={styles.cardItem}>
                        <Image style={styles.images} source={detail}  />
                        <View style={styles.listProduct}>
                            <Text style={styles.labelProduct}>Dry Cleaning</Text>
                            <Text style={styles.quantity}>qty: 1</Text>
                        </View>
                        <View style={styles.totalContainer}>
                            <Text style={styles.labelTotal}>Total</Text>
                            <Text style={styles.price}>$ 10.00</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cardFooter}>
                    <Text style={styles.titleFooter}>Total Order</Text>
                    <Text style={styles.titleFooter}>$ 10.00</Text>
                </View>
            </View>
            <View style={styles.waButton}>
                <Image source={chat} style={styles.icon} />
                <Text style={styles.titleButton}>WHATSAPP US</Text>
            </View>
            <View style={styles.invoiceButton}>
                <Text style={styles.titleInvoice}>Download Invoice</Text>
            </View>
        </View>
    )
}

export default Summary;