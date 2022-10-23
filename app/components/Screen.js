import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Constants from "expo-constants";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={styles.screen}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
