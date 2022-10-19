import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

function App(props) {
  return (
    // <ImageBackground
    //   blurRadius={10}
    //   style={styles.background}
    //   source={require("./app/assets/background.jpg")}
    // >
    //   <View style={styles.logoContainer}>
    //     <Image
    //       style={styles.logo}
    //       source={require("./app/assets/logo-red.png")}
    //     />
    //     <Text style={styles.tagline}>Sell What You Don't Need</Text>
    //   </View>
    //   <View style={styles.buttonsContainer}>
    //     <AppButton title="Login" />
    //     <AppButton title="Register" color="secondary" />
    //   </View>
    // </ImageBackground>

    // <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
    //   <Card
    //     title="Red Jacket for sale"
    //     subTitle="$100"
    //     image={require("./app/assets/chair.jpg")}
    //   />
    // </View>

    // <ListingDetailsScreen />
    <ViewImageScreen />
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default App;
