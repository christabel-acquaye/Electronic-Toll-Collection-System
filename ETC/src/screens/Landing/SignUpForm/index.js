import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { TextField } from "../../../components/TextField";
import styles from "./styles";

import BackgroundImage from "../../../../assets/tollBackground.jpg";

class SignUpForm extends React.Component<NavigationInjectedProps> {
  state = {
    first_name: "",
    last_name: "",
    age: "",
    password: "",
    confirm_password: ""
  };

  handleFirstNameChange = (first_name: string) => {
    this.setState({ first_name });
  };

  render() {
    const {
      first_name,
      last_name,
      age,
      password,
      confirm_password
    } = this.state;
    return <React.Fragment>{this.renderSignUpContent()}</React.Fragment>;
  }

  renderSignUpContent = () => {
    return (
      <ImageBackground source={BackgroundImage} style={styles.backgroundStyle}>
        <View style={styles.viewStyle}>
          <View style={styles.innerView}>
            <Text style={styles.textStyle}>First Name</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={this.handleFirstNameChange}
            />
            <Text />
            <Text style={styles.textStyle}>Last Name</Text>
            <TextInput style={styles.textInputStyle} />
            <Text />

            <Text style={styles.textStyle}>Password</Text>
            <TextInput style={styles.textInputStyle} />
            <Text />
            <Text style={styles.textStyle}>Confirm Password</Text>
            <TextInput style={styles.textInputStyle} />
            <Text />
            <Text style={styles.textStyle}>Vehicle Type</Text>
            <TextInput style={styles.textInputStyle} />
            <Text />
            <Text style={styles.textStyle}>Vehicle Number</Text>
            <TextInput style={styles.textInputStyle} />
            <Text />
          </View>
          <TouchableOpacity style={styles.button} onPress={this.onSignUp}>
            <Text style={styles.extraTextStyle}> SIGN UP </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };

  onSignUp = () => {
    this.props.navigation.navigate("MainStack");
  };
}

export default SignUpForm;
