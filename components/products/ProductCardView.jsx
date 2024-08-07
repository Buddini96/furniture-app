import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from "./productCardView.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductCardView = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                source={{uri: "https://i.pinimg.com/736x/9b/57/1f/9b571fe1ae0ddefd5dcfd071686b64d4.jpg"}}
                // source={product1}
                style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>Product Lorem ipsum dolor sit amet.</Text>
                <Text style={styles.supplier} numberOfLines={1}>Product</Text>
                <Text style={styles.price}>$5400</Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
                <Ionicons name='add-circle' size={35} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView

