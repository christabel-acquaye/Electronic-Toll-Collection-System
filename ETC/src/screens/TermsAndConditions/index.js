import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
class TermsAndConditions extends Component {
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
          title={"Terms And Conditions"}
        />
        <Text style={styles.headerStyle}>eToll Inc.</Text>

        <Text style={styles.subHeading}>Last Updated On 6th March 2019</Text>
        <Text style={styles.paragraph}>
          Please read these Terms and Conditions ("Terms", "Terms and
          Conditions") carefully before using the eToll® mobile application (the
          "Service") operated by eToll®, Inc. (“eToll”, "Us", "We", or "Our").
          Your access to and use of the Service is conditioned upon Your
          acceptance of and compliance with these Terms. These Terms apply to
          all visitors, users and others who wish to access or use the Service.
          By accessing or using the Service You agree to be bound by these
          Terms. If You disagree with any part of the terms then You do not have
          permission to access the Service.
        </Text>
        <Text style={styles.subHeading}>Table of Contents</Text>
        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          1. Purchases
        </Text>

        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          2. Parties
        </Text>

        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          3. Payments and Payments Disputes
        </Text>

        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          4. Account Creation
        </Text>

        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          5. Account Types
        </Text>

        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          6. Account Termination
        </Text>
      </View>
    );
  }
}

export default TermsAndConditions;
