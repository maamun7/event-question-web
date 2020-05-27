import { CHANGE_USERNAME } from './constants';

const initialState = {
	loading: false,
	error: false,
};

function homeReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_USERNAME:
			// Delete prefixed '@' from the github username
			return { ...state, username: action.name.replace(/@/gi, '') };
		default:
			return state;
	}
}

export default homeReducer;
