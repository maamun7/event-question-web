import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import Home from 'containers/Home/Loadable';
import Login from 'containers/Login/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import LoadingIndicator from '../../components/LoadingIndicator'
import ReactNotification from 'react-notifications-component'
import './style.scss';

const App = () => (
	<div className="app-wrapper">
		<Helmet
			titleTemplate="%s - React.js Boilerplate"
			defaultTitle="Hello Devs"
		>
			<meta name="description" content="React application" />
		</Helmet>
		<LoadingIndicator />
		<Header />
		<ReactNotification />
		<BrowserRouter>
			<Switch>				
				<PublicRoute component={Home} restricted={false}  path="/" exact />
				<PublicRoute component={Login} restricted={true} path="/login" exact />
				<PrivateRoute component={Dashboard} path="/dashboard" exact />
				<PrivateRoute component={Dashboard} path="/event" exact />
				<Route path="" component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
		<Footer />
	</div>
);

export default App;
