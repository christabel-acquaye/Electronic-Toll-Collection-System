import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import UserImage from "../../../assets/user.png";
import BackgroundImage from "../../../assets/toll.jpg";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    const { main } = this.props.screenProps;
    console.log(main);

    return (
      <View style={styles.container}>
        <Header
          toggleDrawer={() => {
            console.log("heyy");
            navigation.toggleDrawer();
          }}
          title={"Home"}
          onNotificationPress={() => main.navigate("Notifications")}
        />

{/* <Image source={UserImage} style={styles.image} /> */}
        <ImageBackground source{BackgroundImage} style={{height:"100%", width:"100%"}}>
        <Text>Hi</Text>
        </ImageBackground>
      </View>
    );
  }
}

export default Home;
