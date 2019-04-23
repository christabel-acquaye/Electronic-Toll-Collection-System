import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backgroundStyle: {
    width: "100%",
    height: "100%"
  },
  viewStyle: {
    backgroundColor: "#404886",
    opacity: 0.95,
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column"
  },

  button: {
    alignItems: "center",
    backgroundColor: "#49C5B6",
    padding: 10,
    borderRadius: 25,
    height: 50,
    width: "85%",
    margin: 20
  },
  innerView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 30
  },
  textInputStyle: {
    borderBottomWidth: 1,
    width: "90%",
    textAlign: "left",
    borderColor: "white"
  },
  textStyle: {
    color: "white",
    fontFamily: "Helvetica",
    fontSize: 15,
    textAlign: "left"
  },

  extraTextStyle: {
    fontFamily: "Helvetica",
    fontSize: 15,
    color: "white",
    textAlign: "center"
  }
});
