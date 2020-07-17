import { EVENT_LIST, SUCCESS_EVENT_LIST } from './constants';

const initialState = {
	eventList: []
};

function eventReducer(state = initialState, action) {
	switch (action.type) {

		case EVENT_LIST: {
			const newState = {
				...state,
				loading: true,
				error: false
			};

			return newState;
		}

		case SUCCESS_EVENT_LIST: {
			const newState = {
				...state,
				loading: true,
				error: false,
				eventList: action.eventList
			};

			return newState;
		}

		default:

			return state;
	}
}

export default eventReducer;
