import axios from 'axios';
import { storeToken, clearToken, getToken, getBearerToken, getRefreshToken } from './localstorage';
import { updateToken } from '../containers/App/actions';
import { BASE_URL } from '../containers/App/constants';

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = BASE_URL;

const setupAxiosInterceptors = store => {
	const onRequestSuccess = req => {
		const token = getToken();

		console.log('token :', token);

		if (token) {
			req.headers['Authorization'] = `Bearer ${token}`;
		}

		req.headers['Content-Type'] = 'application/json; charset=utf-8';

		return req;
	}

	const onResponseSuccess = response => response;
	const onResponseError = err => {

		console.log('Interceptor Error:', err);

		const status = err.status || (err.response ? err.response.status : 0);

		if (status === 403 || status === 401) {
			console.log('Remove token please !');
		//	clearToken();
		//	store.dispatch(updateToken({ authToken: false }));
		}

		return Promise.reject(err);
	};

	axios.interceptors.request.use(onRequestSuccess);
	axios.interceptors.response.use(onResponseSuccess, onResponseError);

};

export default setupAxiosInterceptors;
