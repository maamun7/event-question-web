import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import SimpleReactValidator from 'simple-react-validator';
import Logo from '../../components/Header/images/logo.png';
import showNotification from '../../utils/notification';
import { setToken } from '../../utils/localstorage';
import './style.scss';

export default class SignUp extends React.PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmitForm = this.handleSubmitForm.bind(this);
		this.validator = new SimpleReactValidator();
	}

    componentDidUpdate() {
		/* const {
			isLoading, response, error
		} = this.props;

		if (error) {
			showNotification('danger', error);
		}
		console.log('RESPONSE :', response);

		if (response) {
			if (response.status == "SUCCESS") {
				showNotification('success', response.msg);
				setToken(response.data.token);
			} else {
				showNotification('danger', response.msg);
			}
		} */
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
		let signUpMsg = false;
		const {
			isLoading, response, error
		} = this.props;

		if (response) {
			if (response.status == "FAILED") {
				signUpMsg = response.msg;
			}
		}

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
									<p className="participant-wrap">Log in to your account  <span><a className="nav-wrap" href="signup.php">or create account</a></span></p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="content-box">
					<div className="row">
						<div className="col-12 col-md-12">
							<div className="content-box mt-0">
								<div className="content-box-wrap">
									<div className="content-header">
										<div className="header-main">
											<p className="content-header-wrap">Sign Up</p>
										</div>
										{signUpMsg && 
											<div className="alert alert-danger alert-dismissible fade show" role="alert">
												<strong>Woops!</strong> {signUpMsg}
												<button type="button" className="close" data-dismiss="alert" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
										}
									</div>
									<div className="content-body">
										<div className="content-form-wrap">
											<div id="myForm">
												<div className="input-wrap">
													<div className="floating-label mt-5">
														<input
															id="name"
															name="name"
															type="text"
															className="form-bind wrap"
															placeholder="Name"
															value={this.state.name}
															onChange={this.handleInputChange}
															onBlur={() => this.validator.showMessageFor('name')}
														/>
														{this.validator.message('name', this.state.name, 'required|min:3|max:100')}
													</div>
													<div className="floating-label mt-5">
														<input
															id="email"
															name="email"
															type="text"
															className="form-bind wrap"
															placeholder="Email"
															value={this.state.email}
															onChange={this.handleInputChange}
															onBlur={() => this.validator.showMessageFor('email')}
														/>
														{this.validator.message('email', this.state.email, 'required|email')}
													</div>
													<div className="floating-label mt-5">
														<input
															id="password"
															name="password"
															type="password"
															className="form-bind wrap"
															placeholder="Password"
															value={this.state.password}
															onChange={this.handleInputChange}
															onBlur={() => this.validator.showMessageFor('email')}
														/>
														{this.validator.message('password', this.state.password, 'required|min:6|max:50')} 
													</div>
												</div>
												<div className="button-submit text-center">
													<div className="row d-flex align-items-center">
														<div className="text-center col-md-12 mt-3 mb-2">
															<button type="button" onClick={this.handleSubmitForm} className="btn btn-site-default btn-block btn-rounded mt-5">
															{
																isLoading ? <div><span className="spinner-border spinner-border-sm" ></span> Sign Up ...</div> : 'Sign Up'
															}																
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

SignUp.propTypes = {
	isLoading: PropTypes.bool,
	response: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
	error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
	onSubmitSignUp: PropTypes.func
};