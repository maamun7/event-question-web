import { UPDATE_TOKEN, API_RESPONSE, API_ERROR, START_LOADER, STOP_LOADER } from './constants';

export function updateToken(token) {
	return {
		type: UPDATE_TOKEN,
		token
	};
}

export function apiResponse(data) {
	return {
		type: API_RESPONSE,
		data
	};
}

export function apiError(error) {
	return {
		type: API_ERROR,
		error
	};
}

export function startLoader() {
	return {
		type: START_LOADER
	};
}

export function stopLoader() {
	return {
		type: STOP_LOADER
	};
}
