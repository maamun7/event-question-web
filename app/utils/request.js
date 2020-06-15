import 'whatwg-fetch';
import axios from 'axios';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
	if (response.status === 204 || response.status === 205) {
		return null;
	}
	return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	}

	const error = new Error(response.statusText);
	error.response = response;
	throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
	return fetch(url, options)
		.then(checkStatus)
		.then(parseJSON);
}
/* 
export function postRequest(url, data) {
	return fetch(url, { 
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(data)
		})
		.then(checkStatus)
		.then(parseJSON);
} */

export async function postRequest(url, data) {
	return await axios({
		method: 'post',
		url: url,
		data: data,
		responseType: 'json'
	})
		.then(res => {
			if (res.status === 204 || res.status === 205) {
				return null;
			}

			return res.data;
		})
		.catch(handleError);
}

function handleError(error) {
	if (error.response) {
		console.log(error.response.data);
		console.log(error.response.status);
		console.log(error.response.headers);
	} else if (error.request) {
		console.log(error.request);
	} else {
		console.log('Error', error.message);
	}

	console.log(error.toJSON());
}
