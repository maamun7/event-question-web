import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import EventList from '../../components/EventList';
import './style.scss';
import { EDESTADDRREQ } from 'constants';

export default class Event extends React.PureComponent {

	constructor(props) {
		super(props);
		
		this.state = {
			name: '',
			email: '',
			password: ''
		}
		
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmitForm = this.handleSubmitForm.bind(this);
	}

    componentDidMount() {
		this.props.onLoadEventList();
	}

	handleSubmitForm(e) {
		e.preventDefault();
		if (this.validator.allValid()) {
			this.props.onSubmitSignUp({ name: this.state.name, email: this.state.email, password: this.state.password });
		} else {
			this.validator.showMessages()
			this.forceUpdate()
		}
	}

	handleInputChange(e) {
		const target = e.target;

		if (target.name === 'name') {
			this.setState({
				name: target.value
			});
		}

		if (target.name === 'email') {
			this.setState({
				email: target.value
			});
		}

		if (target.name === 'password') {
			this.setState({
				password: target.value
			});
		} 
	}

	render() { 
		const {
			isLoading, error, eventList
		  } = this.props;

		  const eventListProps = {
			isLoading,
			error,
			eventList
		  };

		  console.log('eventListProps :', eventListProps);

		return (
			<div className="container">
				<div className="title">
					<div className="row">
						<div className="col-12">
							<div className="logo-img text-center">
								<img className="img-wrap" src='' alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="account-space">
					<div className="content-box mt-4">
						<div className="row justify-content-around">
							<div className="col-12 col-md-6">
								<div className="participant-content wrap">
									
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="content-box">
					<div className="row">
						<div className="col-12 col-md-12">
						<h1>Event List</h1>
							<EventList {...eventListProps} />
						</div>
					</div>
				</div>
			</div>
		);
	}
} 

Event.propTypes = {
	isLoading: PropTypes.bool,
	error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
	eventList: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};