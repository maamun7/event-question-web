import {
	call, put, select, takeLatest, takeEvery
} from 'redux-saga/effects';
import { postRequest } from 'utils/request';
import { API_HOST } from '../App/constants';
import { LOGIN_SUBMIT, PROCESS_SUBMIT, LOGIN_URL } from './constants';
import { apiResponse, apiError, updateToken, stopLoader  } from '../App/actions';
import { loginSuccess, loginError } from './actions';
import { makeSelectLoginData } from './selectors';
import { storeToken } from '../../utils/localstorage'

export function* postLogin() {
	console.log('calling post login');
	const payload = yield select(makeSelectLoginData());
	const url = `${API_HOST}${LOGIN_URL}`;

	try {
		const response = yield call(postRequest, url, payload);

		yield put(stopLoader());
		// Store to local storage
		if (response.status == "SUCCESS") {
			let { data } = response
			data.authToken = true
			storeToken(data);
			yield put(updateToken(data));
		}
		yield put(apiResponse(response));
	} catch (err) {
		yield put(apiError(err));
	}
}

export default function* loginWatcher() {
	console.log('SAGA');
	// yield takeEvery('LOGIN_SUBMIT', postLogin);
	// yield takeEvery('AUTH_INITIATE_LOGOUT', logout);
	// yield takeEvery('AUTH_CHECK_TIMEOUT', checkAuthTimeout);
	yield takeEvery(PROCESS_SUBMIT, postLogin);
   // yield* takeLatest(Actions.LOGOUT, logout);
}