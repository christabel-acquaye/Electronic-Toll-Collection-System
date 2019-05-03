type UserSignUp = {
	first_name: string,
	last_name: string,
	email: string,
	password: string,
	confirm_password: string,
	vehicle_type: string,
	vehicle_nummber: string
};

export const validateSignUpForm = (userSignUp: UserSignUp) => {
	const {
		firstName,
		lastName,
		email,
		password,
		confirmPassword,
		vehicleType,
		vehicleNummber
	} = userSignUp;
	if (
		!firstName &&
		!lastName &&
		!email &&
		!password &&
		!confirmPassword &&
		!vehicleType &&
		!vehicleNummber
	) {
		return { error: { message: "All fields are required" }, status: false };
	}

	if (password !== confirmPassword) {
		return { error: { message: "Password do not match" }, status: false };
	}
	return { status: true, error: null };
};
