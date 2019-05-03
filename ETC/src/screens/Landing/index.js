import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ViewPagerAndroid as ViewPager } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./styles";
import FirstGuide from "./PagerItems/FirstGuide";
import SecondGuide from "./PagerItems/SecondGuide";
import ThirdGuide from "./PagerItems/ThirdGuide";
import FourthGuide from "./PagerItems/FourthGuide";
import LogIn from "./LogIn";
import SignUpForm from "./SignUpForm";
import { verifyUserCredentials, showMessagePopUp } from "./LogIn/_helpers";

class Landing extends Component {
	// static propTypes = {};

	state = {
		page: 0,
		email: "",
		password: ""
	};

	nextPage = () => {
		const { page } = this.state;
		if (page + 1 === 5) {
			this.props.screenProps.main.navigate("MainStack");
		}

		if (page + 1 > 5) return;

		this.setState({ page: page + 1 });
		this.viewPager.setPage(page + 1);
	};

	prevPage = () => {
		const { page } = this.state;

		if (page - 1 < 0) return;
		this.setState({ page: page - 1 });
		this.viewPager.setPage(page - 1);
	};

	componentWillReceiveProps(props) {
		if (this.props !== props) {
			if (props.error) {
				showMessagePopUp(props.error.errorMessage);
				return;
			}
			if (props.user) {
				this.props.navigation.navigate("MainStack");
			}
		}
	}

	render() {
		const { navigation } = this.props;
		const { page } = this.state;

		return (
			<ViewPager
				ref={ref => (this.viewPager = ref)}
				style={styles.container}
				initialPage={page}
				onPageScroll={event => this.setState({ page: event.nativeEvent.position })}
			>
				<View key="0">
					<FirstGuide nextPage={this.nextPage} />
				</View>
				<View key="1">
					<SecondGuide nextPage={this.nextPage} prevPage={this.prevPage} />
				</View>
				<View key="2">
					<ThirdGuide nextPage={this.nextPage} prevPage={this.prevPage} />
				</View>
				<View key="3">
					<FourthGuide nextPage={this.nextPage} prevPage={this.prevPage} />
				</View>
				<View key="4">
					<LogIn
						isLoading={this.props.isLoading}
						user={this.props.user}
						error={this.props.error}
						onLogIn={this.onLogIn}
						onSignUp={this.onSignUp}
						onPasswordChange={this.onPasswordChange}
						handleEmailChange={this.handleEmailChange}
						password={this.state.password}
						email={this.state.email}
					/>
				</View>
			</ViewPager>
		);
	}

	onLogIn = () => {
		const { password, email } = this.state;
		if (!password && !email) {
			showMessagePopUp("Enter your email and password");
			return;
		}
		// showMessagePopUp(phoneNumber);
		this.props.verifyUserCredentials(email, password);
	};

	onSignUp = () => {
		this.props.navigation.navigate("SignUpForm");
	};

	onPasswordChange = text => {
		this.setState({ password: text });
	};

	handleEmailChange = text => {
		this.setState({ email: text });
	};
}

const mapStateToProps = state => ({
	error: state.user.error,
	user: state.user.user,
	isLoading: state.user.isLoading
});

const mapDispatchToProps = {
	verifyUserCredentials
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Landing);
