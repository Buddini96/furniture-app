import { ActivityIndicator, Text, View } from "react-native";
import React from "react";
import styles from "./productList.style";
import useFetch from "../../hook/useFetch";
import { COLORS, SIZES } from "../../constants";
import { FlatList } from "react-native-gesture-handler";
import ProductCardView from "./ProductCardView";

const ProductList = () => {
  const { data, isLoading, error } = useFetch();

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Something went wrong: {error.message}</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <ProductCardView item={item} />
          </View>
        )}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default ProductList;
