import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

class LogOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> LogOut </Text>
      </View>
    );
  }
}

export default LogOut;
