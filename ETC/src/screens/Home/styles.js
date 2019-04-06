import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white"
  },
  headerStyle: {
    fontSize: 40,
    color: "#454F63",
    textAlign: "left",
    fontFamily: "Gibson",
    padding: 2
  },
  paragraph: {
    fontSize: 16,

    color: "#454F63"
  },
  image: {
    borderRadius: 12,
    width: 90,
    height: 90
  },
  viewStyle: {
    paddingTop: 30,
    paddingLeft: 20,
    flexDirection: "row"
  },
  straight: {
    padding: 8,
    flexDirection: "column"
  },
  line: {
    width: "90%",
    height: 1,
    backgroundColor: "#F5F5F7",
    alignSelf: "center"
  }
});
