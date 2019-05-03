import React, { Component, Fragment } from "react";
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	TouchableOpacity,
	Image,
	TextInput,
	Platform
} from "react-native";
import styles from "./styles";

import { Card } from "../../components/Card";
import Header from "../../components/Header";
import IonIcons from "react-native-vector-icons/Ionicons";
import UserImage from "../../../assets/user.png";

class Profile extends Component {
	state = {
		first_name: "Jane",
		last_name: "Doe",
		age: "",
		password: "",
		confirm_password: ""
	};

	handleFirstNameChange = (first_name: string) => {
		this.setState({ first_name });
	};

	handleLastNameChange = (last_name: string) => {
		this.setState({ last_name });
	};

	handleAgeChange = (age: string) => {
		this.setState({ age });
	};

	handleVehicleTypeChange = (vehicle_type: string) => {
		this.setState({ vehicle_type });
	};

	handleVehicleNumberChange = (vehicle_nummber: string) => {
		this.setState({ vehicle_nummber });
	};

	onChangePassword = (text: string) => {
		this.setState({ password: text });
	};

	render() {
		const {
			first_name,
			last_name,
			age,
			password,
			confirm_password,
			vehicle_type,
			vehicle_nummber
		} = this.state;
		return <React.Fragment>{this.renderSignUpContent()}</React.Fragment>;
	}
	renderSignUpContent = () => {
		return (
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.imageView}>
						<Image style={styles.image} source={UserImage} />
					</View>
					<Text style={styles.textStyle}>First Name</Text>
					<TextInput
						style={styles.textInputStyle}
						onChangeText={this.handleFirstNameChange}
						placeholder="Jane"
						value="Jane"
					/>
					<Text />
					<Text style={styles.textStyle}>Last Name</Text>
					<TextInput
						placeholder="Doe"
						value="Doe"
						style={styles.textInputStyle}
						onChangeText={this.handleLastNameChange}
					/>
					<Text />

					<Text style={styles.textStyle}>Password</Text>
					<TextInput
						placeholder="password"
						value="*********"
						style={styles.textInputStyle}
						onChangeText={this.onChangePassword}
					/>
					<Text />
					<Text style={styles.textStyle}>Confirm Password</Text>
					<TextInput
						placeholder="password"
						value="**********"
						style={styles.textInputStyle}
						onChangeText={this.onChangePassword}
					/>
					<Text />
					<Text style={styles.textStyle}>Vehicle Type</Text>
					<TextInput
						placeholder="Saloon"
						value="Saloon"
						style={styles.textInputStyle}
						onChangeText={this.handleVehicleTypeChange}
					/>
					<Text />
					<Text style={styles.textStyle}>Vehicle Number</Text>
					<TextInput
						value="AS 1234 - 2019"
						style={styles.textInputStyle}
						onChangeText={this.handleVehicleNumberChange}
						placeholder="AS 1234 - 2019"
					/>
					<Text />

					<TouchableOpacity style={styles.button} onPress={this.onSignUp}>
						<Text style={styles.extraTextStyle}> SAVE CHANGES </Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		);
	};
}

export default Profile;
