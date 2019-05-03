// eslint-disable-next-line react-native/split-platform-components
import { ToastAndroid } from "react-native";

export const showMessagePopUp = (message: string) => {
	ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
};
