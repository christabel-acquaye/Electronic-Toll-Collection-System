import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import UserImage from "../../../assets/user.png";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ padding: 10 }}
        >
          <MaterialIcons name="arrow-back" size={24} />
        </TouchableOpacity>
        {/* First Component */}
        <Text style={styles.headerStyle}> Notifications</Text>
        <View style={styles.viewStyle}>
          <Image source={UserImage} style={styles.image} />
          <View style={styles.straight}>
            <Text style={styles.paragraph}>Payment Receipt Received</Text>
            <Text style={{ fontSize: 12, paddingTop: 5 }}>
              Payment received for complete transaction at 17:00 at the Tema
              Toll Gate.
            </Text>

            <Text style={{ color: "blue", paddingBottom: 10 }}>View More</Text>
          </View>
        </View>
        <View style={styles.line} />

        {/* Second Component */}

        <View style={styles.viewStyle}>
          <Image source={UserImage} style={styles.image} />
          <View style={styles.straight}>
            <Text style={styles.paragraph}>Payment Receipt Received</Text>
            <Text style={{ fontSize: 12, paddingTop: 5 }}>
              Payment received for complete transaction at 17:00 at the Tema
              Toll Gate.
            </Text>

            <Text style={{ color: "blue", paddingBottom: 10 }}>View More</Text>
          </View>
        </View>
        <View style={styles.line} />

        {/* Third Component */}

        <View style={styles.viewStyle}>
          <Image source={UserImage} style={styles.image} />
          <View style={styles.straight}>
            <Text style={styles.paragraph}>Payment Receipt Received</Text>
            <Text style={{ fontSize: 12, paddingTop: 5 }}>
              Payment received for complete transaction at 17:00 at the Tema
              Toll Gate.
            </Text>

            <Text style={{ color: "blue", paddingBottom: 10 }}>View More</Text>
          </View>
        </View>
        <View style={styles.line} />
      </View>
    );
  }
}

export default Notifications;
