import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = (state) => state.global || initialState;

const selectRoute = (state) => state.router;

const getSelectToken = () => createSelector(
	selectGlobal,
	(globalState) => globalState.authToken
);

const getSelectIsLoading = () => createSelector(
	selectGlobal,
	(globalState) => globalState.isLoading
);

const getSelectApiResponse = () => createSelector(
	selectGlobal,
	(globalState) => globalState.apiResponse
);

const getSelectApiError = () => createSelector(
	selectGlobal,
	(globalState) => globalState.apiError
);

const getSelectLocation = () => createSelector(
	selectRoute,
	(routeState) => routeState.location
);

export {
	selectGlobal,
	getSelectToken,
	getSelectIsLoading,
	getSelectApiResponse,
	getSelectApiError,
	getSelectLocation,
};
