import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { TextField } from "../../components/TextField";
import styles from "./styles";
import Header from "../../components/Header";
import BackgroundImage from "../../../assets/tollBackground.jpg";

class Verify extends React.Component<NavigationInjectedProps> {
  constructor(props) {
    super(props);
    this.state = {
      text: "+233 "
    };
  }

  render() {
    const { password, phoneNumber } = this.state;
    return (
      <ImageBackground source={BackgroundImage} style={styles.backgroundStyle}>
        <View style={styles.container}>
          <View style={styles.AuthHeading}>
            <Text style={styles.welcomeStyle}>Welcome to ETC Mobile</Text>
            <Text style={styles.extraTextStyle}>
              Enter your mobile number below to get started
            </Text>
          </View>
          <TextField
            onChangeText={this.onChangeText}
            value={this.state.text}
            cover
          />
          <Text />
          <Text />
          <TouchableOpacity
            style={styles.button}
            // onPress={nextPage}
          >
            <Text style={styles.paragraph}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default Verify;
