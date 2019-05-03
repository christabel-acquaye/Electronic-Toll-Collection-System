import React, { Component } from "react";
import NavigationInjectedProps from "react-navigation";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./styles";
import { Card } from "../../../components/Card";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Detailed_Payments from "./../../Detailed_Payment/index";

const SectionItem = ({ label, amount, expiry_date, onPress }) => (
	<Card style={styles.weeklySection}>
		<View style={styles.weeklyHeader}>
			<View style={styles.weeklyIndicator} />
			<Text style={styles.subHeading}>{label}</Text>
		</View>

		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				padding: 10,
				paddingTop: 0
			}}
		>
			<View
				style={{
					flexDirection: "column"
				}}
			>
				<Text style={styles.paragraph}>Amount</Text>

				<Text style={styles.paragraph}>GHS {amount} </Text>
				<View />
			</View>
			<View
				style={{
					flexDirection: "column"
				}}
			>
				<Text style={styles.paragraph}>Expiry</Text>

				<Text style={styles.paragraph}>{expiry_date}</Text>
			</View>
			<TouchableOpacity style={styles.button} onPress={onPress}>
				<Text style={{ color: "white" }}>Subscribe</Text>
			</TouchableOpacity>
		</View>
	</Card>
);
export default SectionItem;
