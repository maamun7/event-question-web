import axios from 'axios';
import { storeToken, clearToken, getToken, getBearerToken, getRefreshToken } from './localstorage';
import { updateToken } from '../containers/App/actions';

export default function requestInterceptor(store) {

	axios.interceptors.request.use(config => {

		const token = getBearerToken();

		if (token) {
			config.headers['Authorization'] = token;
		}

		config.headers['Content-Type'] = 'application/json; charset=utf-8';

		return config;

	}, error => {

		console.log('interceptor error :', error);

		if (error.response.data.token.KEY == 'ERR_EXPIRED_TOKEN') {
			clearToken();
			store.dispatch(updateToken({ authToken: false}));
		}

		return Promise.reject(error);
	});
}

// Response interceptor
axios.interceptors.response.use(response => {
		// Do something with response data
		return response;
	}, error => {
		// Request for refresh token
		const originalRequest = error.config;
		if (error.response.status === 401 && !originalRequest._retry) {

			originalRequest._retry = true;
			const refreshToken = getRefreshToken();

			return axios.post('/auth/token', {
					"refresh_token": refreshToken
				})
				.then(res => {
					if (res.status === 201) {
						storeToken(res.data);
						axios.defaults.headers.common['Authorization'] = getBearerToken();
						return axios(originalRequest);
					}
				})
		}

		return Promise.reject(error);
	});

