import React, { Component, Fragment } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import styles from "./styles";
import TopImage from "../../../assets/moneyBackground.png";
import MtnImage from "../../../assets/mtn.png";
import VodaImage from "../../../assets/voda.png";
import AirtelImage from "../../../assets/airtel.png";
import VisaImage from "../../../assets/visa.png";
import { Card } from "../../components/Card";
import Header from "../../components/Header";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

class Detailed_Payment extends Component<NavigationInjectedProps> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={TopImage} />
        <View
          style={{
            padding: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            marginTop: -10
          }}
        >
          <Text style={styles.headerStyle}>Select a payment option</Text>
          <Text />
          <Card style={styles.cardContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Image style={styles.imageMenu} source={MtnImage} />
              <Image style={styles.imageMenu} source={VodaImage} />
            </View>
            <View style={styles.line} />
            {/* <Image style={styles.imageMenu} source={AirtelImage} />
            <Image style={styles.imageMenu} source={VisaImage} /> */}
          </Card>
        </View>
      </View>
    );
  }
}

export default Detailed_Payment;
