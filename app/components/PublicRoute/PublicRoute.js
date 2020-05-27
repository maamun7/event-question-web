import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const PublicRoute = ({component: Component, restricted, ...rest}) => {
	const { authToken } = useSelector(state => state.global);
    return (
        <Route {...rest} render={props => (
            authToken && restricted ?
                <Redirect to="/dashboard" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;