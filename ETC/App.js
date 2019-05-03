/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import AppNavigator from "./src/navigation/AppNavigator";
import store from "./src/redux";

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppNavigator />
			</Provider>
		);
	}
}
