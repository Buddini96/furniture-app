import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./productDetails.style";
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto  } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";

const ProductDetails = ({ navigation }) => {
  const route = useRoute();
  const {item} = route.params;
  
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} color={COLORS.white}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.image}
      />

       {/* product name and price */}
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ {item.price}</Text>
          </View>
        </View>

        {/* Rating */}
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color="gold" style={styles.starIcon}/>
            ))}
            <Text style={styles.ratingText}> (4.9)</Text>
          </View>
          
          {/* rating qty */}
          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={24} />
            </TouchableOpacity>
            <Text style={styles.ratingCount}> {count} </Text>

            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={24} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Description */}
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>
            {item.description}
          </Text>
        </View>

        {/* Location and Delivery row */}
        <View style={{marginBottom: SIZES.small}}>
          <View style={styles.location}>
            <View style={{flexDirection: "row"}}>
              <Ionicons 
              name="location-outline" 
              size={20} />
              <Text>{item.product_location}</Text>
            </View>

            <View style={{flexDirection: "row"}}>
              <MaterialCommunityIcons  
              name="truck-delivery-outline"  
              size={20} />
              <Text> Free Delivery </Text>
            </View>
          </View>
        </View>

        {/* Cart row */}
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>Buy Now</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.addtoCart}>
            <Fontisto 
            name="shopping-bag"
            size={22}
            color={COLORS.lightWhite}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
