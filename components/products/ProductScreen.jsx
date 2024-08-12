import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Categories from "./Categories";
import ProductRow from "./ProductRow";

const ProductScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('1');

  return (
    <View style={styles.container}>
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <ProductRow selectedCategory={selectedCategory} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ProductScreen;
