import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { store } from 'react-notifications-component';
import './style.scss';

export default class Home extends React.PureComponent {
	componentDidMount() {
		const commonNotific = {
			title: "Success !",
			message: "Configurable",
			type: "success",
			insert: "bottom",
			container: "top-right",
			animationIn: ["animated", "fadeIn"],
			animationOut: ["animated", "fadeOut"],
			dismiss: {
				duration: 5000,
				//onScreen: true, // Show progress bar
				pauseOnHover: true,
				showIcon: true,
				click: true
			  }
		  }

		  store.addNotification({
			  ...commonNotific,
			  message: 'Successfully added the item'
		  });

		const { username, onSubmitForm } = this.props;
		if (username && username.trim().length > 0) {
			onSubmitForm();
		}
	}

	render() {
		const {
			loading, error, repos, username, onChangeUsername, onSubmitForm
		} = this.props;

		const reposListProps = {
			loading,
			error,
			repos
		};

		return (
			<div className="container-fluid">
				<div className="title">
					<div className="row justify-content-around">
						<div className="col-12 col-md-2">
							<div className="logo-img text-lg-left">
								<a href="../index.php">
									<img className="img-wrap icon-wrap" src="../build/img/login_bg/home-icon.png" alt="" />
								</a>
							</div>
						</div>
						<div className="col-12 col-md-8">
							<div className="logo-img text-center">
								<img className="img-wrap" src="../build/img/common/logo/slido_green.png" alt="" />
							</div>
						</div>
						<div className="col-12 col-md-2">
							<div className="logo-img text-lg-right">
								<div className="dropdown">
									<img className="img-wrap icon-wrap dropdown-toggle" type="button" data-toggle="dropdown" src="../build/img/login_bg/images.png" alt="" />
									<ul className="dropdown-menu text-center">
										<li><a className="nav-link wrap" href="login.php">Admin login</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="content-box">
					<div className="row">
						<div className="col-12 col-md-12">
							<div className="content-box-participant-wrap">
								<div className="content-box-wrap">
									<div className="content-body">
										<div className="content-form-wrap">
											{/* <form id="myForm" action="">
												<div className="input-wrap">
													<div className="floating-label">
														<input type="text" name="participant_code" className="form-bind-participant wrap" placeholder="Enter code here" />
														<div className="icon">
															<img className="arrow-wrap" src="../build/img/login_bg/green_arrow.png" alt="" />
														</div>
													</div>
												</div>
											</form> */}
											<div className="row">
												<div className="col-md-4 code-input-field">												
													<div className="bg-light rounded rounded-pill shadow-sm mb-4 code-input-custom">
														<div className="input-group">
															<input type="text" placeholder="Enter the event code !" aria-describedby="button-addon1" className="form-control border-0 bg-light" />
															<div className="input-group-append">
																<button id="button-addon1" type="submit" className="btn text-orange">Go</button>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="acceptable-app text-center">
												<span className="code-wrap">By using this app I agree to the <a className="navuse" href="#">Acceptable Use</a></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="privacy text-center">
							<a className="navuse" href="#">Privacy Policy</a> | <a className="navuse" href="">Privacy Settings</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	loading: PropTypes.bool,
	error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
	repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
	onSubmitForm: PropTypes.func,
	username: PropTypes.string,
	onChangeUsername: PropTypes.func
};
