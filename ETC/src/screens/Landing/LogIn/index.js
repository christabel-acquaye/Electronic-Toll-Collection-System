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
import SignUpForm from "../SignUpForm";
import BackgroundImage from "../../../../assets/tollBackground.jpg";

class Login extends React.Component<NavigationInjectedProps> {
  state = {
    phoneNumber: "",
    password: ""
  };

  onChangeText = (text: string) => {
    this.setState({
      phoneNumber: text
    });
  };

  onChangePassword = (text: string) => {
    this.setState({ password: text });
  };

  render() {
    const { password, phoneNumber } = this.state;
    return (
      <ImageBackground source={BackgroundImage} style={styles.backgroundStyle}>
        <View style={styles.container}>
          <View style={styles.LoginInputsContainer}>
            <TextField
              style={styles.textInputStyle}
              placeholder="Phone number"
              keyboardType="phone-pad"
              onChangeText={this.onChangeText}
              value={phoneNumber}
              iconName="cellular"
            />
            <TextField
              style={styles.textInputStyle}
              placeholder="Password"
              secureTextEntry
              onChangeText={this.onChangePassword}
              value={password}
              iconName="lock"
            />
            <Text style={styles.linkStyle}>Forgot Password?</Text>
          </View>
          {/* <Button
						text="Login"
						onPress={this.onLogin}
						size={Constants.app.theme.sizes.LARGE}
					/> */}
          {/* <Button
						text="Sign Up"
						onPress={this.onSignUp}
						size={Constants.app.theme.sizes.LARGE}
						color={Constants.app.theme.colors.button.INFO}
          /> */}

          <TouchableOpacity style={styles.button} onPress={this.props.onLogIn}>
            <Text style={styles.paragraph}>Log in</Text>
          </TouchableOpacity>
          <Text />
          <Text />
          <TouchableOpacity
            style={styles.otherButtonStyle}
            onPress={this.props.onSignUp}
          >
            <Text style={styles.paragraph}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

  // onLogin = () => {
  // 	this.props.navigation.navigate(Constants.app.routes.ERRANDS);
  // };

  // onSignUp = () => {
  // 	this.props.navigation.navigate(Constants.app.routes.AUTH);
  // };
}

export default Login;
