import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";

class PrivacyPolicy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header
          toggleDrawer={navigation.toggleDrawer}
          title={"Privacy Policy"}
        />

        <Text style={styles.headerStyle}>eToll Inc.</Text>
        <Text style={styles.subHeading}>Last Updated On 6th March 2019</Text>
        <Text style={styles.paragraph}>
          We at eToll Inc.("eToll", "we", "us", "our") know that our
          users("you", "your") care about how your personal information is used
          and shared, and we take your privacy seriously. If you have any
          questions about this Privacy Policy, please don't hesitate to contact
          us
        </Text>
        <Text style={styles.subHeading}>Table of Contents</Text>
        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          1. Who we are
        </Text>

        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          2. Why we gather information about our customers
        </Text>

        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          3. What types of personal information do we gather
        </Text>

        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          4. How we learn about you from third parties
        </Text>

        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          5. How we use your personal information
        </Text>

        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          6. How we use customer information and categories of third party
          persons or entities with whom we may share customer information
        </Text>

        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          7.How we keep your personal information secure
        </Text>
      </View>
    );
  }
}

export default PrivacyPolicy;
