const defaultUserState = {
	error: null,
	user: null,
	isLoading: false
};

export default (state = defaultUserState, action) => {
	switch (action.type) {
		case "SHOW-LOGIN-ACTIVITY-INDICATOR":
			return { ...state, ...defaultUserState, isLoading: true };
		case "USER-LOGIN-SUCCESS":
			return { ...state, ...defaultUserState, user: action.payload };
		case "USER-LOGIN-FAILED":
			return { ...state, ...defaultUserState, error: action.payload };
		case "USER_STATE_CHANGED":
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
