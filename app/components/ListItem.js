import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import colors from "../config/colors";

const ListItem = ({ title, subTitle, image, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />

        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: colors.medium,
    margin: 5,
  },
});
