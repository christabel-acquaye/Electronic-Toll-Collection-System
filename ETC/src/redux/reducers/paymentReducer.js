const defaultUserState = {
	payments: []
};

export default (state = defaultUserState, action) => {
	switch (action.type) {
		case "ADD-PAYMENT-TO-PAYMENTS":
			return { ...state, payments: [...state.payments, action.payload] };
		default:
			return state;
	}
};
