import { TOKEN_KEY } from '../containers/App/constants';

export const storeToken = (tokenObject) => {
    localStorage.setItem(TOKEN_KEY, tokenObject);
}

export const clearToken = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const getToken = () => {
	console.log('TOKEN :', localStorage.getItem(TOKEN_KEY));

    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}