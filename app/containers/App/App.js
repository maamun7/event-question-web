import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import Home from 'containers/Home/Loadable';
import Login from 'containers/Login/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import Event from 'containers/Event/Loadable';
import SignUp from 'containers/SignUp/Loadable';
import Header from 'containers/Header';
import Footer from 'components/Footer';
import LoadingIndicator from '../../components/LoadingIndicator';
import NotFound from '../NotFound/Loadable';
import ReactNotification from 'react-notifications-component';
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
		<BrowserRouter>
			<Header />
			<ReactNotification />
			<Switch>			
				<PublicRoute component={Home} restricted={false}  path="/" exact />
				<PublicRoute component={Login} restricted={true} path="/Login" exact />
				<PublicRoute component={SignUp} restricted={true} path="/SignUp" exact />
				<PrivateRoute component={Dashboard} path="/Dashboard" exact />
				<PrivateRoute component={Event} path="/Event" exact />
				<Route path="" component={NotFound} />
			</Switch>
			<Footer />
		</BrowserRouter>
	</div>
);

export default App;
