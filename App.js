import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Switch,
} from "react-native";
import AppButton from "./app/components/AppButton";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import LoginScreen from "./app/components/LoginScreen";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingScreen from "./app/screens/ListingScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "clothing", value: 2 },
  { label: "camera", value: 3 },
];

function App(props) {
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState(categories[0]);
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
    // <ViewImageScreen />
    // <MessagesScreen />

    // <Screen>
    //   <Icon name="email" size={50} backgroundColor="red" iconColor="white" />
    // </Screen>
    // <AccountScreen />
    // <ListingScreen />
    <Screen>
      {/* <AppTextInput placeholder="Username" icon="email" /> */}

      {/* <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} /> */}

      {/* <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        icon="apps"
        placeholder="Category"
        items={categories}
      />
      <AppTextInput icon="email" placeholder="Email" /> */}
      {/* <LoginScreen /> */}
      <ListingEditScreen />
    </Screen>
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
