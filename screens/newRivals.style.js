import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    // marginTop: SIZES.xxSmall, // Add margin to offset the image
  },
  topImage: {
    width: '100%',
    height: 480, // Adjust height as needed
    resizeMode: 'cover', // Ensure image covers the width without distortion
    transform: [{ scale: 1.4 }], // Zoom in by scaling the image
  },
  textOverlay: {
    position: 'absolute',
    top: '73%', // Position the text towards the middle of the image
    left: '0%', // Adjust this to align the text properly
    right: '30%',
    // backgroundColor: 'rgba(10, 10, 10, 0.1)', // Semi-transparent background for readability
    padding: 10,
    borderRadius: SIZES.medium,
  },
  overlayText: {
    color: COLORS.black,
    fontSize: SIZES.xxLarge,
    fontFamily: "bold",
    textAlign: 'center',
  },
  upperRow: {
    width: SIZES.width - 50,
    marginHorizontal: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    borderRadius: SIZES.large,
    // backgroundColor: COLORS.primary,
    top: SIZES.xxLarge,
    zIndex: 999,
  },
  heading: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.black,
    marginLeft: 5,
  },
});

export default styles;
