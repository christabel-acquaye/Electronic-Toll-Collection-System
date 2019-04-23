import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";
import styles from "./styles";
import Header from "../../components/Header";
import { Card } from "../../components/Card";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SectionItem from "./SectionItem";
import DetailedPayment from "./../Detailed_Payment";

class Payments extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const data = [
			{
				label: "Weekly",
				amount: 120.0,
				expiry_date: "04/June/2019"
			},
			{
				label: "Weekly",
				amount: 120.0,
				expiry_date: "04/June/2019"
			},
			{
				label: "Weekly",
				amount: 120.0,
				expiry_date: "04/June/2019"
			},
			{
				label: "Weekly",
				amount: 120.0,
				expiry_date: "04/June/2019"
			},
			{
				label: "Weekly",
				amount: 120.0,
				expiry_date: "04/June/2019"
			},
			{
				label: "Weekly",
				amount: 120.0,
				expiry_date: "04/June/2019"
			},
			{
				label: "Weekly",
				amount: 120.0,
				expiry_date: "04/June/2019"
			},
			{
				label: "Weekly",
				amount: 120.0,
				expiry_date: "04/June/2019"
			}
		];
		const { navigation } = this.props;

		return (
			<View style={styles.container}>
				<Header toggleDrawer={navigation.toggleDrawer} title={"Payments"} />

				<Text />

				<Card style={styles.card}>
					<Text style={styles.money}>GHS 32.00</Text>
					<Text style={styles.moneyHeading}>Total Balance</Text>
				</Card>
				<Text />
				<Text style={styles.sectionHeading}>Subscription List</Text>
				<Text />
				<FlatList
					data={data}
					keyExtractor={(item, index) => index.toString()}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => (
						<SectionItem
							label={item.label}
							expiry_date={item.expiry_date}
							amount={item.amount}
							onPress={this.onSubscribe}
						/>
					)}
				/>
				<Text />
			</View>
		);
	}
	onSubscribe = () => {
		this.props.navigation.navigate("DetailedPayment");
	};
}

export default Payments;
