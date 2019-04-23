import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ViewPagerAndroid as ViewPager
} from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import PropTypes from "prop-types";
import styles from "./styles";
import FirstGuide from "./PagerItems/FirstGuide";
import SecondGuide from "./PagerItems/SecondGuide";
import ThirdGuide from "./PagerItems/ThirdGuide";
import FourthGuide from "./PagerItems/FourthGuide";
import LogIn from "./LogIn";
import SignUpForm from "./SignUpForm";

class Landing extends Component {
  static propTypes = {};
  state = {
    page: 0
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

  render() {
    const { navigation } = this.props;
    const { page } = this.state;

    return (
      <ViewPager
        ref={ref => (this.viewPager = ref)}
        style={styles.container}
        initialPage={page}
        onPageScroll={event =>
          this.setState({ page: event.nativeEvent.position })
        }
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
          <LogIn onLogIn={this.onLogIn} onSignUp={this.onSignUp} />
        </View>
      </ViewPager>
    );
  }

  onLogIn = () => {
    this.props.navigation.navigate("MainStack");
  };
  onSignUp = () => {
    this.props.navigation.navigate("SignUpForm");
  };
}

export default Landing;
