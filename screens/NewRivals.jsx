import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./newRivals.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import ProductList from "../components/products/ProductList";
import topImage from "../assets/images/bg2.jpg";

const NewRivals = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={topImage} style={styles.topImage} />
        {/* Text overlay */}
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={30} color={COLORS.black} />
          </TouchableOpacity>
          {/* <Text style={styles.heading}> Products </Text> */}
        </View>
        <View style={styles.textOverlay}>
          
          <Text style={styles.overlayText}>Sales up to 70% off</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        
        <ProductList />
      </View>
    </View>
  );
};

export default NewRivals;
