import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { clearToken } from '../../utils/localstorage';
import './style.scss';

export default class Dashboard extends React.PureComponent {
	constructor(props) {
		super(props);

		this.logOut = this.logOut.bind(this);
	}

	componentDidMount() {
		
	}

	logOut() {
		clearToken();
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
											<div className="row">
												<div className="col-md-4 code-input-field">												
													
												</div>
											</div>
											<div className="acceptable-app text-center">
												
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
							<a className="navuse" href="#">Privacy Policy</a> | <a className="navuse" >afafasdfasd </a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Dashboard.propTypes = {
	loading: PropTypes.bool,
	error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
	repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
	onSubmitForm: PropTypes.func,
	username: PropTypes.string,
	onChangeUsername: PropTypes.func
};
