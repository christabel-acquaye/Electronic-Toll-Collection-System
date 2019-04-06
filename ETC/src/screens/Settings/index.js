import React, { Component, Fragment } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import UserImage from "../../../assets/user.png";
import { Card } from "../../components/Card";
import Header from "../../components/Header";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;

    const menu = [
      {
        name: "General",
        color: "#42CEE2",
        icon: "build"
      },
      {
        name: "Notifications",
        color: "#3497FD",
        icon: "notifications"
      },

      {
        name: "Ask for help",
        color: "#CB4CEA",
        icon: "forum"
      },
      {
        name: "Invite Friends",
        color: "#FF4F9A",
        icon: "share"
      }
    ];

    const Menu = ({ menuItems }) => (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          margin: 20,
          justifyContent: "space-between"
        }}
      >
        {menuItems.map(item => (
          <Fragment key={item.name}>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <MaterialIcons name={item.icon} size={24} color={item.color} />
              <Text style={{ textAlign: "center" }}> {item.name} </Text>
            </View>
          </Fragment>
        ))}
      </View>
    );

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={UserImage} />
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={{ position: "absolute", left: 10, top: 10 }}
        >
          <MaterialIcons name="menu" size={24} color={"white"} />
        </TouchableOpacity>
        {/* <MaterialIcons
          name={"filter-list"}
          size={24}
          color={"white"}
          style={{ position: "absolute", right: 20, top: 10 }}
        /> */}

        <View
          style={{
            padding: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            marginTop: -10
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text style={styles.headerStyle}>Jane Doe</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={{ color: "white" }}>Edit</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subHeading}> Kumasi, Ghana</Text>

          <Text style={styles.paragraph}>20 years</Text>

          <Card style={styles.cardContainer}>
            <Menu menuItems={menu.slice(0, 2)} />
            <View style={styles.line} />
            <Menu menuItems={menu.slice(2, 4)} />
          </Card>
        </View>
      </View>
    );
  }
}

export default Settings;
