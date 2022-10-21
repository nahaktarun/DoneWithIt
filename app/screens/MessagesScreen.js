import {
  View,
  Text,
  FlatList,
  StatusBar,
  Platform,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/chair.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/chair.jpg"),
  },
];

// Using expo constants
export default function () {
  //   const [message, setMessage] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  //   const handleDelete = (message) => {
  //     setMessage(messages.filter((m) => m.id != message.id));
  //   };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          //   setMessage([
          //     {
          //       id: 2,
          //       title: "T2",
          //       description: "D2",
          //       image: require("../assets/chair.jpg"),
          //     },
          //   ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
