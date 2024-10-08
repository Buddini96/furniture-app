import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./heading.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const Heading = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
            <Ionicons name="chevron-forward" size={24} color={COLORS.black} style={{marginRight: 12}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
