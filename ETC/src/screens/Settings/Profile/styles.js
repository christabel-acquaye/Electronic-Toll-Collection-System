import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column"
	},
	image: {
		width: "35%",

		height: "40%",
		borderRadius: 100
	},
	imageView: {
		alignContent: "center",
		alignItems: "center"
	},

	textInputStyle: {
		borderBottomWidth: 1,
		width: "90%",
		textAlign: "left",
		borderColor: "black"
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

	extraTextStyle: {
		fontFamily: "Helvetica",
		fontSize: 15,
		color: "black",
		textAlign: "center"
	}
});
