import { createSelector } from 'reselect';

const selectLogin = (state) => state.login;

const makeSelectLoginData = () => createSelector(
	selectLogin,
	(loginState) => loginState.loginData
);

const getLoginSuccessRes = () => createSelector(
	selectLogin,
	(loginState) => loginState.loginRes
);

export {
	selectLogin,
	getLoginSuccessRes,
	makeSelectLoginData
};
