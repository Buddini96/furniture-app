import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../constants/index";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SIZES.medium,
        flexDirection: "row",
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: "#FFF",
        ...SHADOWS.medium,
        shadowColor: COLORS.lightWhite,
    },
    image: {
        width: 70,
        height: 70, 
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    productImage: {
        width: "100%",
        height: 65, 
        resizeMode: "cover",
        borderRadius: SIZES.small,
    },
    textConatainer: {
        flex: 1,
        paddingHorizontal: SIZES.medium
    },
    productTitle: {
        fontSize: SIZES.medium,
        fontFamily: "bold",
        color: COLORS.primary
    },
    supplier: {
        fontSize: SIZES.small + 2,
        fontFamily: "regular",
        color: COLORS.gray,
        marginTop: 3
    },

});

export default styles;
