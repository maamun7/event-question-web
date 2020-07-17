import React from 'react';
import { NavLink, Link } from 'react-router-dom'
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
						<NavLink exact className="nav-link wrapnav" activeStyle={{ color: '#32CD32'}} to="/Dashboard">Dashboard</NavLink>
					</li>
					<li className="nav-item wrap">
						<NavLink exact className="nav-link wrapnav" activeStyle={{ color: '#32CD32'}}  to="/Event">Event</NavLink>
					</li>
					<li className="nav-item wrap">
						<NavLink exact className="nav-link wrapnav" to="#">Pricing</NavLink>
					</li>
					<li className="nav-item wrap">
						<NavLink exact className="nav-link wrapnav" to="#">Resources</NavLink>
					</li>
					<li className="nav-item wrap">
						<NavLink exact className="nav-link wrapnav" to="#">Enterprise</NavLink>
					</li>
					<li className="nav-item wrap">
						<div className="dropdown">
							<Link style={{ color: '#32CD32'}} className="dropdown-toggle nav-link wrapnav" data-toggle="dropdown"> {tokenData.name}
								<span className="caret"></span>
							</Link>
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
						<NavLink exact className="nav-link wrapnav" to="/">Home</NavLink>
					</li>
					<li className="nav-item wrap">
						<NavLink exact className="nav-link wrapnav" to="#">Solutions</NavLink>
					</li>
					<li className="nav-item wrap">
						<NavLink exact className="nav-link wrapnav" to="#">Pricing</NavLink>
					</li>
					<li className="nav-item wrap">
						<NavLink exact className="nav-link wrapnav" to="#">Resources</NavLink>
					</li>
					<li className="nav-item wrap">
						<NavLink exact className="nav-link wrapnav" to="#">Enterprise</NavLink>
					</li>
					<li className="nav-item login-wrap">
						<NavLink exact className="nav-link wrapnav" to="/login">Log In</NavLink>
					</li>
					<li className="nav-item ml-3">
						<NavLink exact className="nav-link wrapnav -blue" to="/SignUp">
							<span className="button button--small button--orange">Sign Up</span>
						</NavLink>
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
 