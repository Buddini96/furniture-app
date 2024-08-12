import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Ionicons, Fontisto, Feather } from "@expo/vector-icons";
import Carousel from "../components/home/Carousel";
import Heading from "../components/home/Heading";
import ProductRow from "../components/products/ProductRow";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/products/Categories";
import ProductScreen from "../components/products/ProductScreen";

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      <Carousel />
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <TouchableOpacity>
            <Feather
              name="search"
              size={24}
              style={styles.searchIcon}
              onPress={() => navigation.navigate("Search")}
            />
          </TouchableOpacity>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="cart-outline" 
              style={styles.bag}
              size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
        <Categories />
        <Heading />
        <ProductRow />
      </ScrollView>
      </>
  );
};

export default Home;
