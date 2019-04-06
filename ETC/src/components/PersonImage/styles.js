import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  ageContainer: {
    position: "absolute",
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3ACCE1",
    bottom: 0,
    right: 0,
    borderBottomEndRadius: 12,
    borderTopStartRadius: 15
  },
  ageText: {
    color: "white",
    textAlign: "center"
  }
});
