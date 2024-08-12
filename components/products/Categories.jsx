import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const categories = [
 
  { id: '1', name: "Sofa", icon: "couch" },
  { id: '2', name: "Chair", icon: "chair" },
  { id: '3', name: "Bed", icon: "bed" },
  { id: '4', name: "Lamp", icon: "lightbulb" },
  { id: '5', name: "Clock", icon: "clock" }, 
  { id: '6', name: "Desk", icon: "desktop" }, 
  { id: '7', name: "Table", icon: "table" },
  { id: '8', name: "Shelf", icon: "book" }, 
  { id: '9', name: "Cabinet", icon: "box" },  
  { id: '10', name: "Wardrobe", icon: "archive" },  
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('1'); // Default active category is 'Table'

  const handlePress = (id) => {
    setSelectedCategory(id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => handlePress(item.id)} 
            style={[
              styles.categoryItem, 
              selectedCategory === item.id && styles.selectedCategory
            ]}
          >
            <FontAwesome5 
              name={item.icon} 
              size={24} 
              color={selectedCategory === item.id ? "black" : "black"} 
            />
            <Text style={[
              styles.categoryText, 
              selectedCategory === item.id && styles.selectedText
            ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        horizontal
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  categoryItem: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f0f0f0", 
  },
  selectedCategory: {
    backgroundColor: "#eabd6a", 
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },
  selectedText: {
    color: "black", // Text color for the selected item
  }
});

export default Categories;
