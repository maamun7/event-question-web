import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.png';
import './style.scss';

const HeaderContent = (props) => {
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
					{props.content}
				</nav>
			</section>
		</div>
	)
}

export default HeaderContent;
