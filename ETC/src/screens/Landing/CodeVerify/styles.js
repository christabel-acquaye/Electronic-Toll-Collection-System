import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backgroundStyle: {
    width: "100%",
    height: "100%"
  },

  container: {
    backgroundColor: "#404886",
    opacity: 0.95,
    width: "100%",
    height: "100%",
    marginTop: 70
  },
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
    justifyContent: "center"
  },
  innerView: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    margin: 20,
    justifyContent: "space-between"
  },
  extraTextStyle: {
    fontFamily: "Helvetica",
    fontSize: 15,
    color: "white"
  },
  welcomeStyle: {
    fontFamily: "Helvetica",
    fontSize: 19,
    color: "white",
    marginTop: 120,

    textAlign: "center"
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "white",
    height: 50,
    width: 50,
    backgroundColor: "white"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#49C5B6",
    padding: 10,
    borderRadius: 25,
    height: 50,
    width: "85%",
    margin: 20
  }
});
