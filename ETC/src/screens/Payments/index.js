import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";
import { connect } from "react-redux";
import styles from "./styles";
import Header from "../../components/Header";
import { Card } from "../../components/Card";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SectionItem from "./SectionItem";
import DetailedPayment from "./../Detailed_Payment";
import subscriptions from "./data/subscriptions.json";
import { addNewPayment } from "../../redux/actions";
class Payments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			total: 0
		};
	}

	componentDidMount() {
		this.setState({ data: subscriptions });
	}

	render() {
		// const data = [];
		const { navigation } = this.props;

		return (
			<View style={styles.container}>
				<Header toggleDrawer={navigation.toggleDrawer} title={"Payments"} />

				<Text />

				<Card style={styles.card}>
					<Text style={styles.money}>GHS {this.state.total.toFixed(2)}</Text>
					<Text style={styles.moneyHeading}>Total Balance</Text>
				</Card>
				<Text />
				<Text style={styles.sectionHeading}>Subscription List</Text>
				<Text />
				<FlatList
					data={this.state.data}
					keyExtractor={(item, index) => index.toString()}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => (
						<SectionItem
							label={item.label}
							expiry_date={item.expiry_date}
							amount={item.amount}
							onPress={this.onSubscribe(item)}
						/>
					)}
				/>
				<Text />
			</View>
		);
	}
	onSubscribe = item => () => {
		const value = this.state.total + item.amount;
		this.setState({ total: value });
		this.props.addNewPayment(item.amount);
		this.props.screenProps.main.navigate("Detailed_Payment");
	};
}

export default connect(
	null,
	{ addNewPayment }
)(Payments);
