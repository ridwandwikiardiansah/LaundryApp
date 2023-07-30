import { StyleSheet,Dimensions } from "react-native";
import Color from "../../Constant/Color";
const viewPortWidth = Dimensions.get("window").width;

export default StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        width: '100%',
        minHeight: '100%',
        marginTop: 65,
        backgroundColor: Color.White,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 10,
        padding: 20
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        backgroundColor: Color.White2,
        borderRadius: 10
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 10,
        alignSelf: 'center'
    },
    saldoContainer: {
        backgroundColor: Color.Main,
        height: '100%',
        borderRadius: 10,
        padding: 20,
        paddingLeft: 35
    },
    menuContainer: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        marginVertical: 10,
        justifyContent: 'space-between'
    },
    menuCard: {
        backgroundColor: Color.White2,
        flexDirection: 'row',
        padding: 10,
        width: (viewPortWidth/2) - 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    orderContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Color.White2,
        marginVertical: 10,
        borderRadius: 10
    },
    invoiceContainer: {
        backgroundColor: Color.Main,
        width: 80,
        height: '100%',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        paddingTop: 10
    },
    username: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'left'
    },
    greeting: {
        fontSize: 10,
        fontWeight: '400',
        textAlign: 'left'
    },
    saldo: {
        fontSize: 18,
        fontWeight: '800',
        color: Color.White,
        textAlign: 'right'
    },
    labelSaldo: {
        textAlign: 'right',
        color: Color.White
    },
    invoiceLabel: {
        marginTop: 10,
        color: Color.White,
        fontWeight: '500',
        fontSize: 11,
        textAlign: 'center'
    },
    textOrderContainer: {
        height: '100%',
        flexDirection: 'column',
        paddingTop: 20
    },
    order: {
        marginTop: 20
    },
    price: {
        color: Color.Main,
        fontSize: 15,
        fontWeight: '700'
    },
    labelOrder: {
        fontSize: 10
    },
    imagesOrder: {
        width: 80,
        height: 80,
        marginLeft: 20,
        borderRadius: 10
    },
    productBackground: {
        width: '100%',
        height: 150,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 10,
        marginVertical: 10
    },
    titleProduct: {
        fontSize: 25,
        fontWeight: '700',
        color: Color.White,
        marginLeft: 20
    },
    subtitle: {
        fontSize: 15,
        color: Color.White,
        marginLeft: 20
    },
    labelType: {
        color: Color.Main,
        fontWeight: '500',
        fontSize: 17
    },
    productLatestBackground: {
        width: (viewPortWidth / 2) - 30,
        height: 150,
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 10,
        marginVertical: 10,
        marginRight: 20
    },
    latestContainer: {
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    latestLabel: {
        fontSize: 15,
        color: Color.White,
        marginLeft: 5
    },
    latestTitle: {
        fontSize: 25,
        fontWeight: '700',
        color: Color.White,
        marginLeft: 5
    },
    blue: {
        width: '100%',
        height: 65,
        position: 'absolute',
        zIndex: 0,
        backgroundColor: 'transparent',
        opacity: 0.5,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    radius: {
        borderRadius: 10
    },
    white: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        height: 20,
        opacity: 0.1,
    }
})