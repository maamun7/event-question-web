import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
import './style.scss';

export default class EventListItem extends React.PureComponent {

	render() {
		const { item } = this.props;

		// Put together the content of the repository
		const content = (
			<td> {item.name} </td>	
		);

		// Render the content into a list item
		return (
			<ListItem key={`repo-list-item-${item.name}`} item={content} />
		);
	}
}

EventListItem.propTypes = {
	item: PropTypes.object
	//currentUser: PropTypes.string,
};
