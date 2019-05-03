import users from "../data/users.json";
import axios from "axios";
import { showMessagePopUp } from "./functions";

export const verifyUserCredentials = (email, password) => async dispatch => {
	dispatch({ type: "SHOW-LOGIN-ACTIVITY-INDICATOR" });
	const user = users[email.trim()];
	showMessagePopUp("Login Sucess");
	if (user && user.password === password) {
		dispatch({ type: "USER-LOGIN-SUCCESS", payload: user });
		return;
	}
	dispatch({
		type: "USER-LOGIN-FAILED",
		payload: {
			errorMessage: "Invalid credentials",
			appCodeMessage: "0K9_eyy"
		}
	});
};

// try {
// 	const data = await axios.post("", { email, password });
// 	if (data.data.error || data.status !== 201) {
// 		throw data.data.error;
// 	}
// 	return data.data;
// } catch (error) {
// 	return {
// 		errorMessage: error.message,
// 		appCodeMessage: error.code
// 	};
// }

// SHOW_LOGIN_ACTIVITY_INDICATOR: ,
// USER_LOGIN_SUCCESSFUL: ,
// USER_LOGIN_FAILED:
