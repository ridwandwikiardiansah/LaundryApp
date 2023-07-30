import { StyleSheet } from "react-native";
import Color from "../../Constant/Color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.White,
        padding: 20
    },
    waButton : {
        backgroundColor: Color.Green,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        borderRadius: 16,
        marginVertical: 20
    },
    icon: {
        marginRight: 10,
        width: 35,
        height: 35,
    },
    titleButton: {
        fontSize: 16,
        fontWeight: '700',
        color: Color.White
    },
    invoiceButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: Color.Main
    },
    titleInvoice: {
        color: Color.Main,
        fontSize: 16,
        fontWeight: '700',
    },
    cardHeader: {
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        backgroundColor: Color.Main,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        padding: 5 
    },
    cardBody: {
        minHeight: 300,
        backgroundColor: Color.White2,
        paddingHorizontal: 10
    },
    cardFooter: {
       flexDirection: 'row',
       height: 70,
       alignItems: 'center',
       backgroundColor: Color.Main,
       borderBottomLeftRadius: 10,
       borderBottomRightRadius: 10,
       justifyContent: 'space-between',
       padding: 10 
    },
    titleHeader: {
        fontSize: 14,
        color: Color.White
    },
    titleFooter: {
        fontSize: 18,
        fontWeight: '700',
        color: Color.White
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    address: {
        width: 120
    },
    textLocation: {
        fontSize: 18,
        fontWeight: '600'
    },
    labelLocation: {
        fontSize: 10
    },
    images: {
        width: 50,
        height: 50
    },
    cardItem: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        padding: 10,
        borderBottomColor: Color.Main
    },
    price: {
        fontSize: 15,
        fontWeight: '700',
        color: Color.Main
    },
    labelText: {
        textAlign: 'right'
    },
    quantity:{
        color: Color.Main
    }

})