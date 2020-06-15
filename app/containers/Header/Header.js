import React from 'react';
import PropTypes from 'prop-types';
import HeaderContent from '../../components/HeaderContent';

export default class Header extends React.PureComponent {
	constructor(props) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout(e) {
		e.preventDefault();
		this.props.onLogout()	
	}

	render() {
		const { hasToken, tokenData } = this.props;

		const authHeader = (
			<div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
				<ul className="navbar-nav wrap mr-auto">
					<li className="nav-item wrap">
						<a className="nav-link wrapnav" href="/Dashboard">Dashboard</a>
					</li>
					<li className="nav-item wrap">
						<a className="nav-link wrapnav" href="#">Solutions</a>
					</li>
					<li className="nav-item wrap">
						<a className="nav-link wrapnav" href="#">Pricing</a>
					</li>
					<li className="nav-item wrap">
						<a className="nav-link wrapnav" href="#">Resources</a>
					</li>
					<li className="nav-item wrap">
						<a className="nav-link wrapnav" href="#">Enterprise</a>
					</li>
					<li className="nav-item wrap">
						<div className="dropdown">
							<a style={{ color: '#32CD32'}} className="dropdown-toggle nav-link wrapnav" data-toggle="dropdown"> {tokenData.name}
								<span className="caret"></span>
							</a>
							<ul className="dropdown-menu">
								<li><a onClick={ this.handleLogout }> Logout </a> </li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		);

		const nonAuthHeader = (	
			<div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
				<ul className="navbar-nav wrap mr-auto">
					<li className="nav-item wrap">
						<a className="nav-link wrapnav" href="/">Home</a>
					</li>
					<li className="nav-item wrap">
						<a className="nav-link wrapnav" href="#">Solutions</a>
					</li>
					<li className="nav-item wrap">
						<a className="nav-link wrapnav" href="#">Pricing</a>
					</li>
					<li className="nav-item wrap">
						<a className="nav-link wrapnav" href="#">Resources</a>
					</li>
					<li className="nav-item wrap">
						<a className="nav-link wrapnav" href="#">Enterprise</a>
					</li>
					<li className="nav-item login-wrap">
						<a className="nav-link wrapnav" href="/login">Log In</a>
					</li>
					<li className="nav-item ml-3">
						<a className="nav-link wrapnav -blue" href="/SignUp">
							<span className="button button--small button--orange">Sign Up</span>
						</a>
					</li>
				</ul>
			</div>
		);

		return (
			<HeaderContent content={ hasToken ? authHeader : nonAuthHeader } />
		);
	}
}

Header.propTypes = {
//	hasToken: PropTypes.boolean,
//	tokenData: PropTypes.object
};
 