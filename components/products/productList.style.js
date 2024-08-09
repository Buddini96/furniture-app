import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    flex: 1,
    paddingTop: SIZES.xxLarge+20,
  },
  contentContainer: {
    paddingHorizontal: SIZES.small, 
  },
  separator: {
    height: 16,
  },
  itemContainer: {
    flex: 1,
    marginHorizontal: SIZES.small/2,
    marginBottom: SIZES.small / 2,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.medium,
  },
  errorText: {
    color: COLORS.red,
    fontSize: SIZES.medium,
    textAlign: "center",
  },
});

export default styles;
