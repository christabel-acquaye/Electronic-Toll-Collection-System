import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import TransactionImage from "../../../../../assets/transactions.png";
import PropTypes from "prop-types";
import styles from "./styles";

const ThirdGuide = ({ nextPage, prevPage }) => (
  <View style={styles.container}>
    {/* <ImageBackground style={styles.backgroundImage_S} source={./Landing.png}> */}
    <Image style={styles.image} source={TransactionImage} />
    <Text style={styles.headerStyle}>Transactions</Text>

    <Text style={styles.paragraph}>
      View past history of all tolls paid at toll gates including amount of
      money deducted.
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

export default ThirdGuide;
