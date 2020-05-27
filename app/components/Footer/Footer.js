import React from 'react';
import './style.scss';

const Footer = () => (
	<section className="footer">
		<div className="container-fluid">
			<div className="footer-nav">
				<div className="row">
					<div className="col-md-6">
						<div className="footer-copyright">
							<span className="copyright">© All rights reserved • 2012 - 2020</span>
						</div>
					</div>
					<div className="col-md-6">
						<ul className="nav justify-content-end">
							<li className="nav-item wrap">
								<a className="nav-link-wrap" href="#">Privacy Policy</a>
							</li>
							<li className="nav-item wrap">
								<a className="nav-link-wrap" href="#">Privacy Preferences</a>
							</li>
							<li className="nav-item wrap">
								<a className="nav-link-wrap" href="#">Status Page</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Footer;
