import { SIGNUP_SUBMIT, PROCESS_SUBMIT, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';

const initialState = {
	signUpData: false
};

function signUpReducer(state = initialState, action) {
	switch (action.type) {

		case SIGNUP_SUBMIT: {
			const newState = {
				...state,
				loading: true,
				error: false,
				signUpData: action.signUpData
			};

			return newState;
		}

		case SIGNUP_SUCCESS: {
			const newState = {
				...state,
				loading: true,
				error: false,
				signUpRes: action.signUpRes
			};

			return newState;
		}

		case SIGNUP_ERROR: {
			return { ...state, error: action.error, loading: true };
		}

		default:

			return state;
	}
}

export default signUpReducer;
