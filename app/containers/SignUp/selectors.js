import { createSelector } from 'reselect';

const selectSignUp = (state) => state.signUp;

const makeSelectSignUpData = () => createSelector(
	selectSignUp,
	(signUpState) => signUpState.signUpData
);

const getSignUpSuccessRes = () => createSelector(
	selectSignUp,
	(signUpState) => signUpState.signUpRes
);

export {
	selectSignUp,
	makeSelectSignUpData,
	getSignUpSuccessRes
};
