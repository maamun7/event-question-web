import { LOGIN_SUBMIT, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

const initialState = {
	loginData: false
};

function loginReducer(state = initialState, action) {
	switch (action.type) {

		case LOGIN_SUBMIT: {
			const newState = {
				...state,
				loading: true,
				error: false,
				loginData: action.loginData
			};

			return newState;
		}

		case LOGIN_SUCCESS: {
			const newState = {
				...state,
				loading: true,
				error: false,
				loginRes: action.loginRes
			};

			return newState;
		}

		case LOGIN_ERROR: {
			return { ...state, error: action.error, loading: true };
		}

		default:

			return state;
	}
}

export default loginReducer;
