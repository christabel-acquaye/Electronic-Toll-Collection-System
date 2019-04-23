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

class CodeVerify extends React.Component<NavigationInjectedProps> {
  render() {
    return <React.Fragment>{this.renderSignUpContent()}</React.Fragment>;
  }

  renderSignUpContent = () => {
    return (
      <ImageBackground source={BackgroundImage} style={styles.backgroundStyle}>
        <View style={styles.container}>
          <View style={styles.innerView}>
            <Text style={styles.extraTextStyle}>Enter the code sent to</Text>
            <Text style={styles.extraTextStyle}> +233 022 5674</Text>
          </View>

          <Text style={styles.welcomeStyle}>Resend code</Text>
          <View style={styles.innerView}>
            <TextInput style={styles.textInputStyle} />
            <TextInput style={styles.textInputStyle} />
            <TextInput style={styles.textInputStyle} />
            <TextInput style={styles.textInputStyle} />
          </View>

          <TouchableOpacity style={styles.button} onPress={this.onNext}>
            <Text style={styles.extraTextStyle}> NEXT </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };
}

export default CodeVerify;
