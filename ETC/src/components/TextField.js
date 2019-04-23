import React from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
// import { Constants } from '../constants';

interface IProps extends TextInputProps {
  iconName: string;
  iconSize: number;
  cover: boolean;
}

export const TextField = ({ iconName, iconSize, cover, ...props }: IProps) => {
  if (cover) {
    return (
      <TextInput
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        {...props}
        style={styles.TextFieldCover}
      />
    );
  }
  return (
    <View style={styles.TextFieldContainer}>
      <Icon
        name={`ios-${iconName}`}
        size={iconSize}
        style={styles.TextFieldIcon}
      />
      <TextInput
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        {...props}
        style={styles.TextFieldInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextFieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.125)",
    width: "100%",
    marginBottom: 15
    // flex: 1
  },
  TextFieldIcon: {
    marginRight: 10,
    color: "rgba(255, 255, 255, 0.35)"
  },
  TextFieldInput: {
    fontSize: 18,
    color: "white"
  },
  TextFieldCover: {
    backgroundColor: "rgba(255, 255, 255, 0.125)",
    fontSize: 18,
    color: "white"
  }
});

TextField.defaultProps = {
  iconSize: 25
};
