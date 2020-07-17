import { EVENT_LIST, SUCCESS_EVENT_LIST } from './constants';

export function loadEventList() {
	return {
		type: EVENT_LIST
	};
}

export function eventListSuccess(eventList) {
	return {
		type: SUCCESS_EVENT_LIST,
		eventList
	};
}
