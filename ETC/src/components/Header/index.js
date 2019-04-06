import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default ({ toggleDrawer, title, onNotificationPress }) => (
  <View
    style={{
      margin: 15,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >
    <TouchableOpacity onPress={toggleDrawer}>
      <MaterialIcons name="menu" color="#454F63" size={25} />
    </TouchableOpacity>
    <View />
    <Text
      style={{
        fontSize: 18,
        color: "#454F63"
      }}
    >
      {title}
    </Text>
    <View />
    <TouchableOpacity onPress={onNotificationPress}>
      <MaterialIcons name="notifications" color="#454F63" size={25} />
    </TouchableOpacity>
  </View>
);
