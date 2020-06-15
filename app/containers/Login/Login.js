import React from 'react';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import SimpleReactValidator from 'simple-react-validator';
import showNotification from '../../utils/notification';
import { setToken } from '../../utils/localstorage';
import './style.scss';

export default class Login extends React.PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			email: 'aaa@bsbsc.com',
			password: 123456,
			isRedirect: false,
			loginMsg: false
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmitForm = this.handleSubmitForm.bind(this);
		this.validator = new SimpleReactValidator();
	}

    componentDidUpdate() {
		const {
			isLoading, response, error
		} = this.props;
	}

	handleSubmitForm(e) {
		e.preventDefault();
		if (this.validator.allValid()) {
			this.props.onSubmitLogin({ email: this.state.email, password: this.state.password });
		} else {
			this.validator.showMessages()
			this.forceUpdate()
		}
	}

	handleInputChange(e) {
		const target = e.target;

		if (target.name === 'email') {
			console.log('Email changing !');
			this.setState({
				email: target.value
			});
		}

		if (target.name === 'password') {
			console.log('password changing !', target.password);
			this.setState({
				password: target.value
			});
		} 
	}

	render() { 
		const {
			isLoading, response, error
		} = this.props;

		if (response) {
			if (response.status == "SUCCESS") {
				console.log('DEBUGG :', 'Calling redirect 1 !');
				this.setState({ isRedirect: true });
			} else {
				this.setState({ loginMsg: response.msg });			
			}
		}

		if (this.state.isRedirect) {	
			console.log('Render :', 'Calling redirectt 2 !');
			return <Redirect exact to="/Dashboard" />
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
											<p className="content-header-wrap">Login</p>
										</div>
										{this.state.loginMsg && 
											<div className="alert alert-danger alert-dismissible fade show" role="alert">
												<strong>Woops!</strong> {this.state.loginMsg}
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
													<div className="form-opportunity">
														<div className="row">
															<div className="col-12 col-md-6 pull-left">
																<div className="remember">
																	<input type="checkbox" name="remember" className="form-check-input" />
																	<label htmlFor="remember">Remember me</label>
																</div>
															</div>
															<div className="col-12 col-md-6 pull-right">
																<span className="remeber-wrap">Forgot password?</span>
															</div>
														</div>
													</div>
													<div className="row d-flex align-items-center">
														<div className="text-center col-md-12 mt-3 mb-2">
															<button type="button" onClick={this.handleSubmitForm} className="btn btn-site-default btn-block btn-rounded mt-5">
															{
																isLoading ? <div><span className="spinner-border spinner-border-sm" ></span> Signin ...</div> : 'Signin'
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

Login.propTypes = {
	isLoading: PropTypes.bool,
	response: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
	error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
	onSubmitLogin: PropTypes.func
};