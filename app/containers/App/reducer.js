import { UPDATE_TOKEN, API_RESPONSE, API_ERROR, START_LOADER, STOP_LOADER } from './constants';
import { hasToken, clearToken, getToken } from '../../utils/localstorage'

export const initialState = {
	authToken: hasToken(),
	tokenData: getToken(),
	isLoading: false,
	apiResponse: false,
	apiError: false,
};

function appReducer(state = initialState, action) {
	switch (action.type) {

		case UPDATE_TOKEN: {			
			const tokenData = action.token;
			return { ...state, authToken: tokenData.authToken, tokenData: tokenData };
		}

		case API_RESPONSE: {
			return { ...state, apiResponse: action.data, isLoading: false };
		}

		case API_ERROR: {
			return { ...state, apiError: action.error, isLoading: false };
		}

		case START_LOADER: {
			return { ...state, isLoading: true };
		}

		case STOP_LOADER: {
			return { ...state, isLoading: false };
		}

		default:
			return state;
	}
}

export default appReducer;
