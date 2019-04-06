import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MoneyImage from "../../../../../assets/money.png";
import PropTypes from "prop-types";
import styles from "./styles";

const SecondGuide = ({ nextPage, prevPage }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={MoneyImage} />
    <Text style={styles.headerStyle}>Purchases</Text>
    <Text style={styles.paragraph}>
      Purchase toll coins for prepaid account to enable payment of tolls.
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

export default SecondGuide;
