import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const PrivateRoute = ({component: Component, ...rest}) => {

	const { authToken } = useSelector(state => state.global);

    return (
        <Route {...rest} render={props => (
            authToken ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;