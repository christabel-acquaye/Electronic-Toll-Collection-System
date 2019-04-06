import React, { PureComponent } from "react";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import Home from "../screens/Home";
import History from "../screens/History";
import Payments from "../screens/Payments";
import Settings from "../screens/Settings";
import AboutUs from "../screens/AboutUs";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import LogOut from "../screens/LogOut";
import TermsAndConditions from "../screens/TermsAndConditions";
import DrawerContent from "../components/DrawerContent";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
//  import { Icon } from "react-native-vector-icons";

// import { Icon } from "react-native-elements";
const DrawerNavigator = createAppContainer(
  createDrawerNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          // <Icon name='rowing'/>
          drawerLabel: "Home",
          drawerIcon: ({ tintColor }) => (
            <MaterialIcons name="home" size={24} color={tintColor} />
          )
        }
      },
      History: {
        screen: History,
        navigationOptions: {
          drawerLabel: "eToll History",
          drawerIcon: ({ tintColor }) => (
            <MaterialIcons name="history" size={24} color={tintColor} />
          )
        }
      },
      Payments: {
        screen: Payments,
        navigationOptions: {
          drawerLabel: "Payments",
          drawerIcon: ({ tintColor }) => (
            <MaterialIcons
              name="account-balance-wallet"
              size={24}
              color={tintColor}
            />
          )
        }
      },
      Settings: {
        screen: Settings,
        navigationOptions: {
          drawerLabel: "Account Settings",
          drawerIcon: ({ tintColor }) => (
            <MaterialIcons name="settings" size={24} color={tintColor} />
          )
        }
      },
      AboutUs: {
        screen: AboutUs,
        navigationOptions: {
          drawerLabel: "About Us",
          drawerIcon: ({ tintColor }) => (
            <MaterialIcons name="people" size={24} color={tintColor} />
          )
        }
      },
      TermsAndConditions: {
        screen: TermsAndConditions,
        navigationOptions: {
          drawerLabel: "Terms and Conditions",
          drawerIcon: ({ tintColor }) => (
            <MaterialIcons name="verified-user" size={24} color={tintColor} />
          )
        }
      },

      PrivacyPolicy: {
        screen: PrivacyPolicy,
        navigationOptions: {
          drawerLabel: "Privacy Policy",
          drawerIcon: ({ tintColor }) => (
            <MaterialIcons name="lock" size={24} color={tintColor} />
          )
        }
      },
      LogOut: {
        screen: LogOut,
        navigationOptions: {
          drawerLabel: "Log Out",
          drawerIcon: ({ tintColor }) => (
            <MaterialIcons
              name="keyboard-backspace"
              size={24}
              color={tintColor}
            />
          )
        }
      }
    },
    {
      contentComponent: DrawerContent
    }
  )
);

export default DrawerNavigator;
