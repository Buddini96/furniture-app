import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
    container: {
        width: 182,
        height: 270,
        borderRadius: SIZES.medium,
        // marginEnd: 20,
        backgroundColor: '#e4e4e4'
    },
    imageContainer: {
        flex: 1,
        // width: 170,
        // marginLeft: SIZES.small/2,
        // marginTop: SIZES.small/2,
        borderRadius: SIZES.small,
        overflow: "hidden",
    },
    image: {
        aspectRatio: 1,
        resizeMode: "cover"
    },
    details: {
        padding: SIZES.small
    },
    title: {
       fontFamily: "semibold",
       fontSize: SIZES.medium,
       marginBottom: 2
    },
    supplier: {
        fontFamily: "regular",
        fontSize: SIZES.small,
        color: COLORS.gray
     },
     price: {
        fontFamily: "bold",
        fontSize: SIZES.medium, 
        color: COLORS.gray
     },
     addBtn: {
        position: "absolute",
        bottom: SIZES.small,
        right: SIZES.small
     }

})

export default styles;