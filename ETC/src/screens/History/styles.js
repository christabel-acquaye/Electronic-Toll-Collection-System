import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
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
    borderRadius: 10,
    backgroundColor: "#3497FD"
  },

  image: {
    width: null,
    height: 200,
    justifyContent: "center"
  },

  headerStyle: {
    fontSize: 25,
    color: "#454F63",
    textAlign: "left",
    fontFamily: "Gibson"
  },
  paragraph: {
    fontSize: 14,
    textAlign: "center",
    color: "#454F63"
  },

  subHeading: {
    fontSize: 14,
    color: "red",
    // textAlign: "center",
    fontFamily: "Gibson",
    marginTop: 10
  },

  textContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  cardContainer: {
    flex: 1,
    margin: 20,
    alignSelf: "center"
  },
  innerCard: {
    margin: 10,
    justifyContent: "center"
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
