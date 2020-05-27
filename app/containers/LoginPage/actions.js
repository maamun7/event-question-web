import { LOGIN_SUBMIT, PROCESS_SUBMIT, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

export function loginSubmit(loginData) {
	return {
		type: LOGIN_SUBMIT,
		loginData
	};
}

export function processSubmit() {
	return {
		type: PROCESS_SUBMIT
	};
}

export function loginSuccess(loginRes) {
	return {
		type: LOGIN_SUCCESS,
		loginRes
	};
}

export function loginError(error) {
	return {
		type: LOGIN_ERROR,
		error
	};
}
