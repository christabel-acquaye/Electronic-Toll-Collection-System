import React, { Component } from "react";
import {
	View,
	Text,
	ImageBackground,
	TextInput,
	TouchableOpacity,
	StatusBar,
	ScrollView
} from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { TextField } from "../../../components/TextField";
import styles from "./styles";

import BackgroundImage from "../../../../assets/tollBackground.jpg";

class Login extends React.Component<NavigationInjectedProps> {
	state = {
		email: "",
		password: ""
	};

	handleEmailChange = (email: string) => {
		this.setState({ email });
	};

	// handlePasswordChange = (password: string) => {
	// 	this.setState({ password });
	// };

	onPasswordChange = (text: string) => {
		this.setState({ password: text });
	};

	render() {
		const { email, password } = this.state;
		return <React.Fragment>{this.renderLoginContent()}</React.Fragment>;
	}

	renderLoginContent = () => {
		return (
			<ImageBackground source={BackgroundImage} style={styles.backgroundStyle}>
				<StatusBar barStyle="light-content" backgroundColor="#404886" />
				<ScrollView style={styles.scrollStyle}>
					<View style={styles.viewStyle}>
						<View style={styles.innerView}>
							<TextField
								style={styles.textInputStyle}
								placeholder="Email"
								onChangeText={this.props.handleEmailChange}
								value={this.props.email}
								iconName="mail"
							/>
							<TextField
								style={styles.textInputStyle}
								placeholder="Password"
								secureTextEntry
								onChangeText={this.props.onPasswordChange}
								value={this.props.password}
								iconName="lock"
							/>

							<Text style={styles.linkStyle}>Forgot Password?</Text>
						</View>
						<TouchableOpacity style={styles.button} onPress={this.props.onLogIn}>
							<Text style={styles.extraTextStyle}>LOGIN</Text>
						</TouchableOpacity>

						<Text />
						<TouchableOpacity style={styles.otherButton} onPress={this.props.onSignUp}>
							<Text style={styles.extraTextStyle}> SIGN UP </Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</ImageBackground>
		);
	};

	onSignUp = () => {
		this.props.navigation.navigate("MainStack");
	};
}

export default Login;
