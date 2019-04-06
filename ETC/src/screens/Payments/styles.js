import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    flex: 1,
    height: "20%",
    alignSelf: "center"
  },

  money: {
    fontSize: 35,
    margin: 15,
    textAlign: "center",
    color: "#FF9690"
  },

  paragraph: {
    fontSize: 16,
    // textAlign: "center",
    color: "#454F63"
  },
  moneyHeading: {
    fontSize: 25,
    color: "#FF9690",
    fontFamily: "Gibson"
  },
  sectionHeading: {
    fontSize: 20,
    color: "#454F63",
    padding: 10
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
  card: {
    borderRadius: 20,
    elevation: 20,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
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
  }
});
