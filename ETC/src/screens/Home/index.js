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
import { connect } from "react-redux";
import styles from "./styles";
import { Card } from "../../components/Card";
import Header from "../../components/Header";
import IonIcons from "react-native-vector-icons/Ionicons";
import UserImage from "../../../assets/user.png";

class Home extends Component {
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
				<Text style={styles.headerStyle}> Home</Text>
				<View style={styles.viewStyle}>
					{this.props.payment.map((payment, index) => (
						<View key={index} style={styles.straight}>
							<Text style={styles.paragraph}>Monthly Subscription</Text>
							<Text style={{ fontSize: 12, paddingTop: 5 }}>
								GHS {payment.amount.toFixed(2)}
							</Text>
							<Text style={{ fontSize: 12, paddingTop: 5 }}>Location</Text>
							<Text style={{ color: "blue", paddingBottom: 10 }}>
								{new Date(payment.timestamp).toDateString()}
							</Text>
						</View>
					))}
				</View>
				<View style={styles.line} />
			</View>
		);
	};
}

const mapStateToProps = state => {
	return { payment: state.payment.payments };
};
export default connect(mapStateToProps)(Home);
