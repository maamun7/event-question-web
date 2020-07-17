import { createSelector } from 'reselect';

const selectEvent = (state) => state.event;

const getSelectEventList = () => createSelector(
	selectEvent,
	(eventState) => eventState.eventList
);

const getSignUpSuccessRes = () => createSelector(
	selectEvent,
	(eventState) => eventState.signUpRes
);

export {
	selectEvent,
	getSelectEventList,
	getSignUpSuccessRes
};
