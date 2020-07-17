import {
	call, put, select, takeLatest, takeEvery
} from 'redux-saga/effects';
import { postRequest, getRequest } from 'utils/request';
import { BASE_URL } from '../App/constants';
import { EVENT_LIST, EVENT_LIST_URL } from './constants';
import { apiResponse, apiError, stopLoader   } from '../App/actions';
import { eventListSuccess } from './actions';
import { storeToken } from '../../utils/localstorage'

export function* loadEventList() {
	const url = `${EVENT_LIST_URL}`;
	console.log('payload :', url);

	try {
		const response = yield call(getRequest, url);
		yield put(stopLoader());
		const { status, data } = response;
		if (response.status == "SUCCESS") {
			yield put(eventListSuccess(data))
		}
	} catch (err) {
		yield put(apiError(err));
	}
}

export default function* eventWatcher() {
	// yield takeEvery('LOGIN_SUBMIT', postLogin);
	// yield takeEvery('AUTH_INITIATE_LOGOUT', logout);
	// yield takeEvery('AUTH_CHECK_TIMEOUT', checkAuthTimeout);
	yield takeEvery(EVENT_LIST, loadEventList);
   // yield* takeLatest(Actions.LOGOUT, logout);
}