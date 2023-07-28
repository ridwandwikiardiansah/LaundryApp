import { StyleSheet } from "react-native";
import Color from "../../Constant/Color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.Main
    },
    rectangle: {
        position: 'absolute'
    },
    titleText: {
        color: Color.White,
        fontSize: 22,
        fontWeight: '600',
        marginLeft: 18,
        marginTop: 85,
        fontFamily: 'poppins'
    },
    titleText2: {
        color: Color.White,
        fontSize: 44,
        fontWeight: '600',
        marginLeft: 18,
        marginTop: 15,
        fontFamily: 'poppins'
    },
    titleText3: {
        color: Color.White,
        fontSize: 12,
        fontWeight: '400',
        marginLeft: 18,
        marginTop: 5
    },
    card: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '60%',
        backgroundColor: Color.White,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 50
    }
})