import { TOKEN_KEY } from '../containers/App/constants';

export const storeToken = (tokenObject) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(tokenObject));
}

export const clearToken = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const hasToken = () => {
	const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
        return true;
    }

    return false;
}

export const getToken = () => {
	const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
        return JSON.parse(token);
    }

    return {};
}