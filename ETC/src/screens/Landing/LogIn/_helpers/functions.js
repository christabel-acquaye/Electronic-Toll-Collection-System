// eslint-disable-next-line react-native/split-platform-components
import { ToastAndroid } from "react-native";
import axios from "axios";
import users from "../data/users.json";

export const showMessagePopUp = (message: string) => {
	ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
};
