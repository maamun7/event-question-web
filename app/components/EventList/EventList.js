import React from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import ListItem from 'components/ListItem';
//import LoadingIndicator from 'components/LoadingIndicator';
import EventListItem from 'containers/EventListItem';

const EventList = ({ isLoading, error, eventList }) => {

	if (isLoading) {
		console.log('isLoading :', isLoading);
		return <List component={LoadingIndicator} />;
	}

	if (error !== false) {
		console.log('error :', error);

		const ErrorComponent = () => (
			<ListItem item={'Something went wrong, please try again!'} />
		);

		return <List component={ErrorComponent} />;
	}

	if (eventList.hasOwnProperty('total')) {
		return <List items={eventList.data} component={EventListItem} />;
	}

	return null;
};

EventList.propTypes = {
	isLoading: PropTypes.bool,
	error: PropTypes.bool,
	eventList: PropTypes.any
};

export default EventList;
