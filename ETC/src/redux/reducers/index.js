import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import paymentReducer from "./paymentReducer";

export default combineReducers({
	user: UserReducer,
	payment: paymentReducer
});
