import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import WelcomeImage from "../../../../../assets/welcome.png";

const FirstGuide = ({ nextPage }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={WelcomeImage} />
    <Text style={styles.headerStyle}>Welcome</Text>

    <Text style={styles.paragraph}>
      A new and improved solution to toll collection. Safer, Secure and
      Convenient
    </Text>

    <TouchableOpacity style={styles.button} onPress={nextPage}>
      <Text style={styles.textSTyle}>Next</Text>
    </TouchableOpacity>
    {/* </ImageBackground> */}
  </View>
);

export default FirstGuide;
