import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.price}>$100</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});

export default ListingDetailsScreen;
