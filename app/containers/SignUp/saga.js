import {
	call, put, select, takeLatest, takeEvery
} from 'redux-saga/effects';

import { postRequest } from 'utils/request';
import { API_HOST } from '../App/constants';
import { SIGNUP_SUBMIT, PROCESS_SUBMIT, SIGNUP_URL } from './constants';
import { apiResponse, apiError, updateToken, stopLoader  } from '../App/actions';
import { signUpSuccess, signUpError } from './actions';
import { makeSelectSignUpData } from './selectors';
import { storeToken } from '../../utils/localstorage'

export function* postSignUp() {
	const payload = yield select(makeSelectSignUpData());
	const url = `${API_HOST}${SIGNUP_URL}`;
	console.log('payload :', payload);

	try {
		const response = yield call(postRequest, url, payload);
		yield put(stopLoader())
		// Store to local storage
		if (response.status == "SUCCESS") {
			let { data } = response
			data.authToken = true
			storeToken(data)
			yield put(updateToken(data))
		}
		yield put(apiResponse(response))
	} catch (err) {
		yield put(apiError(err));
	}
}

export default function* signUpWatcher() {
	// yield takeEvery('LOGIN_SUBMIT', postLogin);
	// yield takeEvery('AUTH_INITIATE_LOGOUT', logout);
	// yield takeEvery('AUTH_CHECK_TIMEOUT', checkAuthTimeout);
	yield takeEvery(PROCESS_SUBMIT, postSignUp);
   // yield* takeLatest(Actions.LOGOUT, logout);
}