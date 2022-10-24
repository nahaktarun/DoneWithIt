import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Formik } from "formik";
import Screen from "./Screen";
import AppText from "./AppText";
import AppTextInput from "./AppTextInput";
import AppButton from "./AppButton";

const LoginScreen = () => {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              textContentType="emailAddress"
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="password"
              onChangeText={handleChange("password")}
              textContentType="password"
              secureTextEntry
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
