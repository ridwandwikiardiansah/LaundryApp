import { StyleSheet } from "react-native";
import Color from "../../Constant/Color";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    images: {
        position: 'absolute',
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        zIndex: 0
    },
    buttonBack: {
        position: 'absolute',
        top: 30,
        left: 20,
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: Color.White,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20
    },
    icon: {
        width: 16,
        height: 16,
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 300,
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    label: {
        color: Color.Main,
        fontSize: 32,
        fontWeight: '600'
    },
    price: {
        fontSize: 36,
        color: Color.Secondary,
        fontWeight: '400'
    },
    rowContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20
    },
    rowContent2: {
        flexDirection: 'row',
        width: '45%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    type: {
        backgroundColor: Color.Aqua,
        padding: 8
    },
    type2: {
        backgroundColor: Color.Aqua2,
        padding: 8
    },
    stock: {
        color: Color.Red,
        fontSize: 12,
        fontWeight: '400'
    },
    content: {
        padding: 20,
    },
    quantityContainer: {
        flexDirection: 'row',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    quantity: {
        width: 106,
        height: 55,
        borderWidth: 1,
        borderColor: Color.Main,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 10
    },
    quantityText: {
        fontSize: 38,
        color: Color.Secondary
    },
    iconQuantity: {
        width: 45,
        height: 45
    }
})