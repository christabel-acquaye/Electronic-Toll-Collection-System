import React from "react";
import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";
import Landing from "../screens/Landing";
import SignUpForm from "../screens/Landing/SignUpForm";
import DrawerNavigator from "./DrawerNavigator";
import Notifications from "../screens/Notifications";
import Detailed_Payment from "../screens/Detailed_Payment";

const MainStack = createAppContainer(
	createStackNavigator(
		{
			DrawerStack: {
				screen: ({ navigation }) => <DrawerNavigator screenProps={{ main: navigation }} />
			},

			Notifications: Notifications,
			Detailed_Payment: Detailed_Payment
		},
		{
			headerMode: "none"
		}
	)
);

const AuthStack = createAppContainer(
	createStackNavigator(
		{
			Landing: Landing,
			SignUpForm: SignUpForm
		},
		{
			headerMode: "none"
		}
	)
);

const AppNavigator = createAppContainer(
	createSwitchNavigator(
		{
			AuthStack,
			// {
			//   screen: ({ navigation }) => (
			//     <AuthStack screenProps={{ main: navigation }} />
			//   )
			// },
			MainStack: MainStack
		},
		{
			initialRouteName: "AuthStack" // todo: comment this out after completion of auth stack
		}
	)
);

export default AppNavigator;

// const AppStack = createStackNavigator({ Home: MainTabNavigator },
//   { headerMode: 'none' });
