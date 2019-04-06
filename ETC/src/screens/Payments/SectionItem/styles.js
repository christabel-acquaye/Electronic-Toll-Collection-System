import { StyleSheet } from "react-native";

export default StyleSheet.create({
  weeklySection: {
    width: "90%",
    alignSelf: "center"
  },
  weeklyIndicator: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: "#3497FD"
  },
  subHeading: {
    fontSize: 32,
    color: "#454F63",
    marginTop: -10
    // marginLeft: -40
    // padding: 10
  },
  weeklyHeader: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  button: {
    // flex: 0.5,
    backgroundColor: "#665EFF",
    width: "30%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  paragraph: {
    fontSize: 16,
    // textAlign: "center",
    color: "#454F63"
  }
});
