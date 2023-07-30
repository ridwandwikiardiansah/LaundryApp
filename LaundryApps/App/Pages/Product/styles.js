import { StyleSheet } from "react-native";
import Color from "../../Constant/Color";

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
    typeText: {
        color: Color.Main,
        fontWeight: '600',
        fontSize: 16,
        marginBottom: 10
    },
    productContainer: {
        maxWidth: '100%',
        minHeight: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
})