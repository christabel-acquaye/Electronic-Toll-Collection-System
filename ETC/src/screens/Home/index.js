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
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.image} source={UserImage} />
			</View>
		);
	}
}

export default Home;
