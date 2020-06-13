import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.png';
import './style.scss';

const NoneAuthHeader = () => {	
	return (
		<div className="container-fluid">
			<section className="header">
				<nav className="navbar navbar-expand-lg wrap">
					<a className="navbar-brand" href="#">
						<img className="nav-wrap-image" src={Logo} alt="" />
					</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

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
				</nav>
			</section>
		</div>
	);
}

export default NoneAuthHeader;
