import React, { Component, PureComponent } from "react";
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { DrawerItems } from "react-navigation";
import DrawerImage from "../../../assets/cover.png";
import UserImage from "../../../assets/user.png";
import MultiColorLine from "../MultiColorLine";
import PersonImage from "../PersonImage";
import styles from "./styles";

class DrawerContent extends PureComponent {
  render() {
    const { width, height } = Dimensions.get("window");
    const screenMode =
      width < Dimensions.get("window").height ? "portrait" : "landscape";

    return (
      <ScrollView>
        <ImageBackground
          source={DrawerImage}
          style={{
            height: screenMode === "portrait" ? width / 2 + 20 : height / 2 + 20
            // marginBottom: 20,
          }}
        >
          <View style={styles.drawerContainer}>
            <TouchableOpacity>
              <PersonImage
                age={21}
                color={this.props.color}
                character={"A"}
                image={UserImage}
              />
              <Text style={{ color: "white", fontSize: 21, marginTop: 10 }}>
                Jane Doe
              </Text>
              <Text style={styles.name}>email@email.com</Text>
            </TouchableOpacity>
          </View>
          <MultiColorLine />
        </ImageBackground>
        <DrawerItems {...this.props} />
      </ScrollView>
    );
  }
}

DrawerContent.defaultProps = {};

export default DrawerContent;
