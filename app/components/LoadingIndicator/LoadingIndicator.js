import React from 'react';
import lineGif from './images/animated-line-01.gif';
import { useSelector } from "react-redux";
import showNotification from '../../utils/notification';
import './style.scss';

const LoadingIndicator = (props) => {
    const { isLoading } = props;
	const state = useSelector(state => state.global);
	const isGlobalLoading = state.isLoading;
	
	if (props.error) {
		showNotification('Error when trying to loading component !', 'danger')

		return null;
	}

	if (!isLoading && !isGlobalLoading) {
		return null;
	}

	if (isLoading || isGlobalLoading) {
		return (
			<div className="line-animation">
				<img src={lineGif} width="100%" />
			</div>
		);
	}
}
 

export default LoadingIndicator;
