import {
	call, put, select, takeLatest, takeEvery
} from 'redux-saga/effects';

import { postRequest } from 'utils/request';

import { LOGIN_SUBMIT, PROCESS_SUBMIT } from './constants';
import { apiResponse, apiError, updateToken  } from '../App/actions';
import { loginSuccess, loginError } from './actions';
import { makeSelectLoginData } from './selectors';
import { storeToken } from '../../utils/localstorage'

export function* postLogin() {
	console.log('calling post login');
	const payload = yield select(makeSelectLoginData());
	const url = `http://ansible.ms2.tech/v1/auth/login`;

	try {
		const response = yield call(postRequest, url, payload);
		console.log('LOGIN-RESPONSE :', response);
		// Store to local storage
		if (response.status == "SUCCESS") {
			const { data } = response.data
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