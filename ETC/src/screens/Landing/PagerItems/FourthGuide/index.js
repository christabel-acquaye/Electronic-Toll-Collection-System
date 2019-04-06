import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import TransactionImage from "../../../../../assets/service.png";
import PropTypes from "prop-types";
import styles from "./styles";

const FourthGuide = ({ nextPage, prevPage }) => (
  <View style={styles.container}>
    {/* <ImageBackground style={styles.backgroundImage_S} source={./Landing.png}> */}
    <Image style={styles.image} source={TransactionImage} />
    <Text style={styles.headerStyle}>Support</Text>

    <Text style={styles.paragraph}>
      Get access to our customer service for clarifications on all issues
      pertaining to the use of the application
    </Text>

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={prevPage}>
        <Text style={styles.textSTyle}>Back</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={nextPage}>
        <Text style={styles.textSTyle}>Next</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default FourthGuide;
