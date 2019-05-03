export const addNewPayment = amount => {
	const payment = { amount, timestamp: new Date().getTime() };
	return {
		type: "ADD-PAYMENT-TO-PAYMENTS",
		payload: payment
	};
};
