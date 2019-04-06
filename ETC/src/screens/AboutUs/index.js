import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header toggleDrawer={navigation.toggleDrawer} title={"About Us"} />

        <Text style={styles.headerStyle}>eToll Inc.</Text>
        <Text style={styles.subHeading}>Last Updated On 6th March 2019</Text>
        <Text style={styles.paragraph} Notes on Tabitha />
        <Text style={styles.paragraph} Notes on Christabel />
      </View>
    );
  }
}

export default AboutUs;
