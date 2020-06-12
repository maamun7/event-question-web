import { SIGNUP_SUBMIT, PROCESS_SUBMIT, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';

export function signUpSubmit(signUpData) {
	return {
		type: SIGNUP_SUBMIT,
		signUpData
	};
}

export function processSubmit() {
	return {
		type: PROCESS_SUBMIT
	};
}

export function signUpSuccess(signUpRes) {
	return {
		type: SIGNUP_SUCCESS,
		signUpRes
	};
}

export function signUpError(error) {
	return {
		type: SIGNUP_ERROR,
		error
	};
}
