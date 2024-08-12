import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/index";

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: "bold",
        fontSize: 40
    },
    appBarWrapper: {
        position: "absolute", // Add this line
        top: 10,              // Add this line
        left: 0,             // Add this line
        right: 0,            // Add this line
        zIndex: 100,         // Add this line to make sure it overlays the carousel
        marginHorizontal: 22,
        marginTop: SIZES.small,
    },
    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: SIZES.medium,
    },
    location: {
        fontFamily: "semibold",
        fontSize: SIZES.medium,
        color: COLORS.gray
    },
    cartCount: {
        position: "absolute",
        bottom: 25,
        width: 16,
        height: 16,
        borderRadius: 8,
        zIndex: 999,
        alignItems: "center",
        backgroundColor: "green",
        justifyContent: "center",
    },
    cartNumber: {
        fontFamily: "regular",
        fontWeight: "600",
        fontSize: 11,
        color: COLORS.lightWhite
    },
    carouselContainer: {
        width: '100%',
        height: 250,
        backgroundColor: '#ddd',
    },
    searchIcon: {
        color: 'white'
    }, bag: {
        color: 'white'
    }
});

export default styles;
