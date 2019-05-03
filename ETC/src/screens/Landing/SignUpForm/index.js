import React, { Component } from "react";
import {
	View,
	Text,
	ImageBackground,
	TextInput,
	ScrollView,
	TouchableOpacity,
	ToastAndroid
} from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { TextField } from "../../../components/TextField";
import { validateSignUpForm, showMessagePopUp } from "../../../resources/services";
import styles from "./styles";
import { connect } from "react-redux";

import BackgroundImage from "../../../../assets/tollBackground.jpg";
import { setUserState } from "./_helpers";

class SignUpForm extends React.Component<NavigationInjectedProps> {
	state = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		vehicleNumber: "",
		vehicleType: ""
	};

	handleFirstNameChange = text => {
		this.setState({ firstName: text });
	};

	handleLastNameChange = text => {
		this.setState({ lastName: text });
	};

	handleEmailChange = text => {
		this.setState({ email: text });
	};

	handleVehicleTypeChange = text => {
		this.setState({ vehicleType: text });
	};

	handleVehicleNumberChange = text => {
		this.setState({ vehicleNumber: text });
	};

	onChangePassword = text => {
		this.setState({ password: text });
	};

	onChangeConfirmPassword = text => {
		this.setState({ confirmPassword: text });
	};

	onSignUp = () => {
		const { setUserState, navigation } = this.props;
		// this.props.navigation.navigate("MainStack");
		const {
			firstName,
			lastName,
			email,
			vehicleType,
			vehicleNumber,
			password,
			confirmPassword
		} = this.state;
		// ToastAndroid.show(lastName, ToastAndroid.LONG);

		if (
			firstName !== "" &&
			lastName !== "" &&
			email !== "" &&
			vehicleType !== "" &&
			vehicleNumber !== "" &&
			password !== "" &&
			confirmPassword !== ""
		) {
			setUserState({
				user: {
					firstName,
					lastName,
					email,
					vehicleType,
					vehicleNumber
				}
			});
			navigation.navigate("MainStack");
		} else {
			ToastAndroid.show("Fields empty", ToastAndroid.SHORT);
		}
	};

	render() {
		const {
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
			vehicleType,
			vehicleNumber
		} = this.state;
		return <React.Fragment>{this.renderSignUpContent()}</React.Fragment>;
	}

	renderSignUpContent = () => {
		return (
			<ImageBackground source={BackgroundImage} style={styles.backgroundStyle}>
				<ScrollView style={styles.scrollStyle}>
					<View style={styles.viewStyle}>
						<View style={styles.innerView}>
							<Text />
							<TextField
								placeholder="First name"
								keyboardType="default"
								onChangeText={text => this.handleFirstNameChange(text)}
								// value={firstName}
								style={styles.inputStyle}
								// iconName="mail"
							/>
							<Text />
							<TextField
								placeholder="Last Name"
								keyboardType="default"
								onChangeText={text => this.handleLastNameChange(text)}
								// value={firstName}
								style={styles.inputStyle}
								// iconName="mail"
							/>
							<Text />
							<TextField
								placeholder="Email"
								keyboardType="default"
								onChangeText={text => this.handleEmailChange(text)}
								// value={firstName}
								style={styles.inputStyle}
								iconName="user"
							/>
							<Text />

							<TextField
								placeholder="Password"
								keyboardType="default"
								onChangeText={text => this.onChangePassword(text)}
								// value={firstName}
								style={styles.inputStyle}
								iconName="user"
							/>
							<Text />
							<TextField
								placeholder="Confirm Password"
								keyboardType="default"
								onChangeText={text => this.onChangeConfirmPassword(text)}
								// value={firstName}
								style={styles.inputStyle}
								iconName="user"
							/>
							<Text />
							<TextField
								placeholder="Vehicle Type"
								keyboardType="default"
								onChangeText={text => this.handleVehicleTypeChange(text)}
								// value={firstName}
								style={styles.inputStyle}
								iconName="user"
							/>
							<Text />
							<TextField
								placeholder="Vehicle Number "
								keyboardType="default"
								onChangeText={text => this.handleVehicleNumberChange(text)}
								// value={firstName}
								style={styles.inputStyle}
								iconName="user"
							/>
							<Text />
						</View>
						<TouchableOpacity style={styles.button} onPress={this.onSignUp}>
							<Text style={styles.extraTextStyle}> SIGN UP </Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</ImageBackground>
		);
	};

	// onSignUp = async () => {
	// 	const validForm = validateSignUpForm(this.state);
	// 	if (!validForm.status && validForm.error) {
	// 		showMessagePopUp(this.state.email);
	// 		showMessagePopUp(validForm.error.message);
	// 		return;
	// 	}
	// 	this.props.navigation.navigate("MainStack");
	// };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	setUserState
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUpForm);
