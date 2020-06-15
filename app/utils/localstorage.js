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

export const getTokenData = () => {
	const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
        return JSON.parse(token);
    }

    return {};
}

export const getToken = _ => {
	
	const { token } = getTokenData();

	if (token) {
		return token;
	}

    return false;
}

export const getBearerToken = _ => {
	const { tokenWithBearer } = getTokenData();

	if (tokenWithBearer) {
		return tokenWithBearer;
	}

    return false;
}

export const getRefreshToken = _ => {
	const { refreshToken } = getTokenData();

	if (refreshToken) {
		return refreshToken;
	}

    return false;
}